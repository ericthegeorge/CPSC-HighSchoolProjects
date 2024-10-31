"use strict";
// Programmer's Name:Eric George
// Program Name:MinMaxNum
//////////////////////////////////////////////////////////////////////////

load("cs10-txt-lib-0.4.js");
// Don't edit the line above, or you won't be able to get user input!

// Also, do not use the following variable names in your own code below:
//    load, print, getInput, javaSleep, currentDate, getWorkingDirectory, newFileReader, fileHasInput, fileGetInput, newFileWriter, newFileAppender, filePrint, fileClose

// Write your program below this line:
// ***********************************
print("This program will find the minimum and maximum numbers from six user inputted numbers.");
print("Please enter a number:");
var userFirstInput = parseInt(getInput());
var maxNumberSoFar = userFirstInput;
var minNumberSoFar = userFirstInput;
print("Please enter a number:");
var userSecondInput = parseInt(getInput());
if (userSecondInput > userFirstInput) {
    maxNumberSoFar = userSecondInput;
}
if (userSecondInput < userFirstInput) {
    minNumberSoFar = userSecondInput;
}
print("Please enter a number:");
var userThirdInput = parseInt(getInput());
if (userThirdInput > maxNumberSoFar) {
    maxNumberSoFar = userThirdInput;
}
if (userThirdInput < minNumberSoFar) {
    minNumberSoFar = userThirdInput;
}
print("Please enter a number:");
var userFourthInput = parseInt(getInput());
if (userFourthInput > maxNumberSoFar) {
    maxNumberSoFar = userFourthInput;
}
if (userFourthInput < minNumberSoFar) {
    minNumberSoFar = userFourthInput;
}
print("Please enter a number:");
var userFifthInput = parseInt(getInput());
if (userFifthInput > maxNumberSoFar) {
    maxNumberSoFar = userFifthInput;
}
if (userFifthInput < minNumberSoFar) {
    minNumberSoFar = userFifthInput;
}
print("Please enter a number:");
var userSixthInput = parseInt(getInput());
if (userSixthInput > maxNumberSoFar) {
    maxNumberSoFar = userSixthInput;
}
if (userSixthInput < minNumberSoFar) {
    minNumberSoFar = userSixthInput;
}
print("Smallest number is:", minNumberSoFar);
print("Biggest number is:", maxNumberSoFar);