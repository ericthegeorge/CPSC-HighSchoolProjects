#!/bin/sh
APPDIR=$(dirname "$0")
cd "$APPDIR"
java  -Djava.library.path="$APPDIR" -jar "$APPDIR/js.jar" -f "$APPDIR/myprogram.js" -opt -1
$SHELL
