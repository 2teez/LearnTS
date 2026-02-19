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
   echo "-s:    Make a standalone ts file."
   echo "-r:    Run a Typescript file to generate a js file."
}

function help() {
    if [[ $# != 2 ]]; then
        echo "${0}" [options] [file]
        avaliable_options
        exit 1
    fi
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
            # make project folder
            mkdir "${filename}" && cd "${filename}"
            npm init --yes
            ;;
        r)
            ;;
        s)
            ;;
        h)
            ;;
        *)
            echo "${opt} Invalid option"
            help
            exit 1
    esac
done
