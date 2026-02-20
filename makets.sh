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

if [[ $# != 2 ]]; then
    echo "${0}" [options] [file]
    avaliable_options
    exit 1
fi

# function to check the file extention

optstring="d:g:p:r:s:h"
while getopts "${optstring}" opt; do
    case "${opt}" in
        d)
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
            npm init --yes > /dev/null 2>&1
            write_tscconfig_file
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
        h)
            ;;
        *)
            echo "${opt} Invalid option"
            help
            exit 1
    esac
done
