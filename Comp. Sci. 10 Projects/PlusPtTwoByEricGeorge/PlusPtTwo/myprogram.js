"use strict";
// Programmer's Name:Eric George
// Program Name:PlusPtTwo
//////////////////////////////////////////////////////////////////////////

load("cs10-txt-lib-0.4.js");
// Don't edit the line above, or you won't be able to get user input!

// Also, do not use the following variable names in your own code below:
//    load, print, getInput, javaSleep, currentDate, getWorkingDirectory, newFileReader, fileHasInput, fileGetInput, newFileWriter, newFileAppender, filePrint, fileClose

// Write your program below this line:
// ***********************************

print("Please type in a decimal number and press enter:");
var userDecimal = parseFloat(getInput());
print("Your chosen number is", userDecimal);
print("My number is", userDecimal + (2 / 10));