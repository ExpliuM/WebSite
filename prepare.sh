#!/bin/bash

if [[ "$OSTYPE" == *"linux-gnu"* ]]; then
    echo Preparing env for Ubuntu OS
    # sudo apt-get --assume-yes install ?

# TODO: To verify that the condition here is good
elif [[ "$OSTYPE" == *"darwin"* ]]; then
    # TODO: To add validation that we have brew
    brew install npm
    brew install postgresql@15
else
    echo "Currently only Ubuntu and OSX"
fi
