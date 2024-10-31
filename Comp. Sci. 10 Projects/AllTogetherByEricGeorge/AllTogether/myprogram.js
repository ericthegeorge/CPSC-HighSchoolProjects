"use strict";
// Programmer's Name:Eric George
// Program Name:AllTogether
//////////////////////////////////////////////////////////////////////////

load("cs10-txt-lib-0.4.js");
// Don't edit the line above, or you won't be able to get user input!

// Also, do not use the following variable names in your own code below:
//    load, print, getInput, javaSleep, currentDate, getWorkingDirectory, newFileReader, fileHasInput, fileGetInput, newFileWriter, newFileAppender, filePrint, fileClose

// Write your program below this line:
// ***********************************
var userInput;
var userDecimal;
var userInputTotal = 0;
var runningTotal = 0;
var maxNumberSoFar = -1000000000000000000000000000000000000000000000000000000000000000000000000000000000;
var minNumberSoFar = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000;
print("This program will find the running total, mean average, minimum, and maximum");
print("numbers, from a group of numbers that the user inputs, as well as the");
print("user's input plus 0.2. How many numbers do you want to process (enter an integer and press return)?");
var amountOfNumUserWillInput = parseInt(getInput());
var divider = amountOfNumUserWillInput;
while (amountOfNumUserWillInput > 0) {
    print("Please enter a number:");
    userDecimal = parseFloat(getInput());
    userInput = parseInt(userDecimal);
    print("Your chosen number is", userDecimal);
    print("My number is", userDecimal + (2 / 10));
    print("Running total is:", runningTotal + userInput);
    runningTotal = runningTotal + userInput;
    userInputTotal = userInput + userInputTotal;
    if (userInput > maxNumberSoFar) {
        maxNumberSoFar = userInput;
    }
    if (userInput < minNumberSoFar) {
        minNumberSoFar = userInput;
    }
    amountOfNumUserWillInput = amountOfNumUserWillInput - 1;
}

var mean = userInputTotal / divider;
print("The mean average is:", mean);
print("Smallest number is:", minNumberSoFar);
print("Biggest number is:", maxNumberSoFar);