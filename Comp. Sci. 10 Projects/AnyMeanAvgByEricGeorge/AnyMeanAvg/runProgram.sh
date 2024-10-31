#!/bin/sh
APPDIR=$(dirname "$0")
cd "$APPDIR"
java -jar js.jar -f "myprogram.js" -opt -1
$SHELL
