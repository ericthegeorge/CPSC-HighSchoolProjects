"use strict";
// Programmer's Name:Eric George
// Program Name:AnyRunningTotal
//////////////////////////////////////////////////////////////////////////

load("cs10-txt-lib-0.4.js");
// Don't edit the line above, or you won't be able to get user input!

// Also, do not use the following variable names in your own code below:
//    load, print, getInput, javaSleep, currentDate, getWorkingDirectory, newFileReader, fileHasInput, fileGetInput, newFileWriter, newFileAppender, filePrint, fileClose

// Write your program below this line:
// ***********************************
var userInput = 0;
var runningTotal = 0;
var previousRunningTotal = 0;
print("How many numbers do you want to sum up (enter an integer and press return)?");
var userInputAmount = parseInt(getInput());
while (userInputAmount > 0) {
    print("Please enter a number:");
    userInput = parseInt(getInput());
    print("Running total is:", runningTotal + userInput);
    runningTotal = runningTotal + userInput;
    userInputAmount = userInputAmount - 1;
}