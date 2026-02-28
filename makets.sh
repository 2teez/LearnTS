#!/usr/bin/env bash
# Author: omitida
# Date: 19th Feb. 2026
# Description: Bash Script to make typescript, javascript and html projects
#
function avaliable_options() {
   echo "Options Avaliable:"
   echo "-d:    Delete a directory or a file."
   echo "-g:    Make a generic Typescript file."
   echo "-h:    Help Function called."
   echo "-p:    Make a Typescript Project."
   echo "-s:    Make a Standalone ts file."
   echo "-r:    Run a Typescript file to generate a js file."
   echo "-t:    Run a unit test by using jest framework and other needed files."
}

function help() {
    if [[ $# != 2 ]]; then
        echo "${0}" [options] [file]
        avaliable_options
        exit 1
    fi
}

function file_extension_checked() {
    filename="${1}"
    ext="${filename#*.}"
    file="${filename%.*}"

    if [[ "${ext}" != "ts" ]] ||[[ "${ext}" == "${file}" ]]; then
        file="${file}.ts"
    else
        file="${filename}"
    fi
    filename="${file}"
}

function generate_tsc_file() {
    filename="${1}"

    file_extension_checked "${filename}"

    echo "console.clear()" > "${filename}"
    echo "console.log(\"Start Here!\")" >> "${filename}"
}

function write_tscconfig_file() {
    echo """
    {
    \"compilerOptions\": {
        \"target\": \"ES2022\",
        \"outDir\": \"./dist\",
        \"rootDir\": \"./src\",
        \"module\": \"CommonJS\"
    }
    }
    """ > tsconfig.json
    mkdir src && mkdir dist
    generate_tsc_file src/index
}

function make_jest_config_file() {
cat<<'JEST-CONFIG' > jest.config.cjs
    /** @type {import('jest').Config} */
    module.exports = {
      roots: ["src"],
      preset: "ts-jest/presets/default-esm",
      testEnvironment: "node",
      extensionsToTreatAsEsm: [".ts"],
      moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
      },
      globals: {
        "ts-jest": {
          useESM: true,
        },
      },
    };
JEST-CONFIG
}

if [[ $# != 2 ]]; then
    echo "${0}" [options] [file]
    avaliable_options
    exit 1
fi

# function to check the file extention

optstring="d:g:p:r:s:t:h"
while getopts "${optstring}" opt; do
    case "${opt}" in
        d)
            file="${OPTARG}"
            echo "Do you want to delete ${file}? (y/n)"
            read -r answer
            if [[ "${answer}" == "y" ]]; then
                if [[ -d "${file}" ]]; then
                    rm -rf "${file}"
                else
                    rm "${file}"
                fi
                echo "${file} deleted."
            else
                echo "${file} not deleted."
            fi
            ;;
        h)
            help
            ;;
        g)
            ;;
        p)
            filename="${OPTARG}"
            [[ -e "${filename}" ]] && echo "${filename} Exist." && exit 1
            # make project folder
            mkdir "${filename}" && cd "${filename}"
            mkdir types && cd types && touch index.d.ts && cd .. # make types folder for type declarations
            npm init --yes > /dev/null 2>&1
            write_tscconfig_file
            # install tsc
            npm install --save-dev typescript@latest
            npm install --save-dev @types/typescript
            npm install --save-dev tsc-watch
            tsc           # compile
            node "./dist" # run
            ;;
        r)
            filename="${OPTARG}"
            tsc
            node "${filename}/dist"
            ;;
        s)
            filename="${OPTARG}"
            generate_tsc_file "${filename}"
            node "${filename}"
            ;;
        t)
            echo "\n------------------------------------------------------------"
            echo "Create the xxx.ts/xxx.js file to be tested in the src folder."
            echo "Moved the xxx.test.ts created for you into the src folder."
            echo "\"jest.config.cjs\" file also created for you should remmain in the root folder."
            echo "Press Enter when ready!"
            echo "------------------------------------------------------------"
            read
            filename="${OPTARG}"
            filename="${filename%.*}.test.ts"
            touch "${filename}"
            make_jest_config_file
            # install jest && ts-jest plugins
            npm install --save-dev jest
            npm install --save-dev ts-jest
            npm install --save-dev @types/jest
            # run a test file
            npx jest --watchAll
            ;;
        h)
            ;;
        *)
            echo "${opt} Invalid option"
            help
            exit 1
    esac
done
