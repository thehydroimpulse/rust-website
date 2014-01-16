#!/bin/dash

set -o errexit

#rustc -O - -o out <<EOF
#$@
#EOF
echo "123"
#exec ./out