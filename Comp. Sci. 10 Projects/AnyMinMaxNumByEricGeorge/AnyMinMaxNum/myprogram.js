"use strict";
// Programmer's Name:Eric George
// Program Name:AnyMinMaxNum
//////////////////////////////////////////////////////////////////////////

load("cs10-txt-lib-0.4.js");
// Don't edit the line above, or you won't be able to get user input!

// Also, do not use the following variable names in your own code below:
//    load, print, getInput, javaSleep, currentDate, getWorkingDirectory, newFileReader, fileHasInput, fileGetInput, newFileWriter, newFileAppender, filePrint, fileClose

// Write your program below this line:
// ***********************************
var userInput;
var maxNumberSoFar = -1000000000000000000000000000000000000000000000000000000000000000000000000000000000;
var minNumberSoFar = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000;
print("This program will find the minimum and maximum numbers from a group of numbers that the user inputs.");
print("How many numbers do you want to process (enter an integer and press enter)?");
var amountOfNumForMinMax = parseInt(getInput());
var firstAmt = amountOfNumForMinMax
while (amountOfNumForMinMax > 0) {
    print("Please enter a number:");
    userInput = parseInt(getInput());
    if (firstAmt == amountOfNumForMinMax) {
        userInput = minNumberSoFar;
        userInput = maxNumberSoFar;
    } else {
        if (userInput > maxNumberSoFar) {
            maxNumberSoFar = userInput;
        }
        if (userInput < minNumberSoFar) {
            minNumberSoFar = userInput;
        }
    }
    amountOfNumForMinMax = amountOfNumForMinMax - 1;
}
print("Smallest number is:", minNumberSoFar);
print("Biggest number is:", maxNumberSoFar);