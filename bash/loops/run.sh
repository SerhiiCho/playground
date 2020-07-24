#!/bin/bash

for NAME in $(cat list.txt); do
    echo "The name is ${NAME^^}"
done