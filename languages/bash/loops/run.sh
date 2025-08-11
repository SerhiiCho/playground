#!/bin/bash

for NAME in $(cat list.txt); do
    echo "My name is ${NAME^^}"
done