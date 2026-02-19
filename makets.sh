#!/usr/bin/env bash
# Author: omitida
# Date: 19th Feb. 2026
# Description: Bash Script to make typescript, javascript and html projects
#
function avaliable_options() {
   echo "Options Avaliable:"
}

if [[ $# != 2 ]]; then
    echo "${0}" [options] [file]
    avaliable_options
    exit 1
fi
