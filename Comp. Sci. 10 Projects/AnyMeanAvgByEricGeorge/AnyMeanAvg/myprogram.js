"use strict";
// Programmer's Name:Eric George
// Program Name:AnyMeanAvg
//////////////////////////////////////////////////////////////////////////

load("cs10-txt-lib-0.4.js");
// Don't edit the line above, or you won't be able to get user input!

// Also, do not use the following variable names in your own code below:
//    load, print, getInput, javaSleep, currentDate, getWorkingDirectory, newFileReader, fileHasInput, fileGetInput, newFileWriter, newFileAppender, filePrint, fileClose

// Write your program below this line:
// ***********************************
var userInput;
var userInputTotal = 0;
print("How many numbers do you want to calculate the mean average of (enter an integer and press enter)?");
var amountOfNumForMean = parseInt(getInput());
var divider = amountOfNumForMean;
print("This program will now find the mean average of", amountOfNumForMean, "numbers.");
while (amountOfNumForMean > 0) {
    print("Please enter a number:");
    userInput = parseInt(getInput());
    userInputTotal = userInput + userInputTotal;
    amountOfNumForMean = amountOfNumForMean - 1;
}
var mean = userInputTotal / divider;
print("The mean average is:", mean);