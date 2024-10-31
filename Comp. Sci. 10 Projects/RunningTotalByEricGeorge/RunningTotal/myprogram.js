"use strict";
// Programmer's Name:Eric George
// Program Name:RunningTotal
//////////////////////////////////////////////////////////////////////////

load("cs10-txt-lib-0.4.js");
// Don't edit the line above, or you won't be able to get user input!

// Also, do not use the following variable names in your own code below:
//    load, print, getInput, javaSleep, currentDate, getWorkingDirectory, newFileReader, fileHasInput, fileGetInput, newFileWriter, newFileAppender, filePrint, fileClose

// Write your program below this line:
// ***********************************
var input1;
var input2;
var input3;
var input4;
var input5;
var rngttl = 0;

print("Please enter a number:");
input1 = parseInt(getInput());
print("Running total is:", input1);
rngttl = input1
print("Please enter a number:");
input1 = parseInt(getInput());
print("Running total is:", rngttl + input1);
rngttl = rngttl + input1;
print("Please enter a number:");
input3 = parseInt(getInput());
print("Running total is:", rngttl+ input3);
rngttl = rngttl + input3;
print("Please enter a number:");
input4 = parseInt(getInput());
print("Running total is:", rngttl+ input4);
rngttl = rngttl + input4;
print("Please enter a number:");
input5 = parseInt(getInput());
print("Running total is:", rngttl+ input5);



