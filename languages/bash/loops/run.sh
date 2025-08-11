#!/bin/bash
set -euo pipefail

# ${var^^} to uppercase (alice -> ALICE)
# ${var,,} to lowercase (ALICE → alice)
# ${var~~} toogle case (Alice → aLICE)
# ${var^} capitalize (alice → Alice)
#
for name in $(cat list.txt); do
    echo "My name is '${name^}'"
done
