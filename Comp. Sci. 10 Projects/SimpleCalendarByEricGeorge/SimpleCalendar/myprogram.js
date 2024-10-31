"use strict";
// Programmer's Name:Eric George
// Program Name:SimpleCalendar
//////////////////////////////////////////////////////////////////////////

load("cs10-txt-lib-0.4.js");
// Don't edit the line above, or you won't be able to get user input!

// Also, do not use the following variable names in your own code below:
//    load, print, getInput, javaSleep, currentDate, getWorkingDirectory, newFileReader, fileHasInput, fileGetInput, newFileWriter, newFileAppender, filePrint, fileClose

// Write your program below this line:
// ***********************************
var lastNumW1 = 0;
print("Enter which day the month begins on (1=Sunday 2=Monday ... 7=Saturday):");
var startingDay = getInput(parseInt());
print("");
print("Enter how many days the month has (28, 29, 30, or 31):");
var howManyDays = getInput(parseInt());
print("Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat");
var howManySpaces = startingDay - 1;
if (howManySpaces == 0) {
    lastNumW1 = 7 - howManySpaces;
    print("  1   2   3   4   5   6  ", lastNumW1);
}
if (howManySpaces == 1) {
    lastNumW1 = 7 - howManySpaces;
    print("      1   2   3   4   5  ", lastNumW1);
}
if (howManySpaces == 2) {
    lastNumW1 = 7 - howManySpaces;
    print("          1   2   3   4  ", lastNumW1);
}
if (howManySpaces == 3) {
    lastNumW1 = 7 - howManySpaces;
    print("              1   2   3  ", lastNumW1);
}
if (howManySpaces == 4) {
    lastNumW1 = 7 - howManySpaces;
    print("                  1   2  ", lastNumW1);
}
if (howManySpaces == 5) {
    lastNumW1 = 7 - howManySpaces;
    print("                      1  ", lastNumW1);
}
if (howManySpaces == 6) {
    lastNumW1 = 7 - howManySpaces;
    print("                         ", lastNumW1);
}
var D1W2 = lastNumW1 + 1;
var D2W2 = lastNumW1 + 2;
var D3W2 = lastNumW1 + 3;
var D4W2 = lastNumW1 + 4;
var D5W2 = lastNumW1 + 5;
var D6W2 = lastNumW1 + 6;
var D7W2 = lastNumW1 + 7;
var D1W3 = lastNumW1 + 8;
var D2W3 = lastNumW1 + 9;
var D3W3 = lastNumW1 + 10;
var D4W3 = lastNumW1 + 11;
var D5W3 = lastNumW1 + 12;
var D6W3 = lastNumW1 + 13;
var D7W3 = lastNumW1 + 14;
var D1W4 = lastNumW1 + 15;
var D2W4 = lastNumW1 + 16;
var D3W4 = lastNumW1 + 17;
var D4W4 = lastNumW1 + 18;
var D5W4 = lastNumW1 + 19;
var D6W4 = lastNumW1 + 20;
var D7W4 = lastNumW1 + 21;
D1W2 = ("  " + D1W2);
D2W2 = ("  " + D2W2);
//if double digits starting from when it possible to be double digits
if (D3W2 > 9) {
    D3W2 = (" " + D3W2);
}
if (D4W2 > 9) {
    D4W2 = (" " + D4W2);
}
if (D5W2 > 9) {
    D5W2 = (" " + D5W2);
}
if (D6W2 > 9) {
    D6W2 = (" " + D6W2);
}
if (D7W2 > 9) {
    D7W2 = (" " + D7W2);
}
if (D1W3 > 9) {
    D1W3 = (" " + D1W3);
}
if (D2W3 > 9) {
    D2W3 = (" " + D2W3);
}
if (D3W3 > 9) {
    D3W3 = (" " + D3W3);
}
if (D4W3 > 9) {
    D4W3 = (" " + D4W3);
}
if (D5W3 > 9) {
    D5W3 = (" " + D5W3);
}
if (D6W3 > 9) {
    D6W3 = (" " + D6W3);
}
if (D7W3 > 9) {
    D7W3 = (" " + D7W3);
}
if (D1W4 > 9) {
    D1W4 = (" " + D1W4);
}
if (D2W4 > 9) {
    D2W4 = (" " + D2W4);
}
if (D3W4 > 9) {
    D3W4 = (" " + D3W4);
}
if (D4W4 > 9) {
    D4W4 = (" " + D4W4);
}
if (D5W4 > 9) {
    D5W4 = (" " + D5W4);
}
if (D6W4 > 9) {
    D6W4 = (" " + D6W4);
}
if (D7W4 > 9) {
    D7W4 = (" " + D7W4);
}
//if not double digits til it impossible for it not to be
if (D3W2 <= 9) {
    D3W2 = ("  " + D3W2);
}
if (D4W2 <= 9) {
    D4W2 = ("  " + D4W2);
}
if (D5W2 <= 9) {
    D5W2 = ("  " + D5W2);
}
if (D6W2 <= 9) {
    D6W2 = ("  " + D6W2);
}
if (D7W2 <= 9) {
    D7W2 = ("  " + D7W2);
}
if (D1W3 <= 9) {
    D1W3 = ("  " + D1W3);
}
print(D1W2, D2W2, D3W2, D4W2, D5W2, D6W2, D7W2);
print(D1W3, D2W3, D3W3, D4W3, D5W3, D6W3, D7W3);
print(D1W4, D2W4, D3W4, D4W4, D5W4, D6W4, D7W4);

if (howManyDays == 28) {
    if (startingDay == 1) {
        print("");
    } else if (startingDay == 2) {
        print(" 28");
    } else if (startingDay == 3) {
        print(" 27  28");
    } else if (startingDay == 4) {
        print(" 26  27  28");
    } else if (startingDay == 5) {
        print(" 25  26  27  28");
    } else if (startingDay == 6) {
        print(" 24  25  26  27  28");
    } else {
        print(" 23  24  25  26  27  28");
    }
}
if (howManyDays == 29) {
    if (startingDay == 1) {
        print(" 29");
    } else if (startingDay == 2) {
        print(" 28  29");
    } else if (startingDay == 3) {
        print(" 27  28  29");
    } else if (startingDay == 4) {
        print(" 26  27  28  29");
    } else if (startingDay == 5) {
        print(" 25  26  27  28  29");
    } else if (startingDay == 6) {
        print(" 24  25  26  27  28  29");
    } else {
        print(" 23  24  25  26  27  28  29");
    }
}
if (howManyDays == 30) {
    if (startingDay == 1) {
        print(" 29  30");
    } else if (startingDay == 2) {
        print(" 28  29  30");
    } else if (startingDay == 3) {
        print(" 27  28  29  30");
    } else if (startingDay == 4) {
        print(" 26  27  28  29  30");
    } else if (startingDay == 5) {
        print(" 25  26  27  28  29  30");
    } else if (startingDay == 6) {
        print(" 24  25  26  27  28  29  30");
    } else {
        print(" 23  24  25  26  27  28  29");
        print(" 30");
    }
}
if (howManyDays == 31) {
    if (startingDay == 1) {
        print(" 29  30  31");
    } else if (startingDay == 2) {
        print(" 28  29  30  31");
    } else if (startingDay == 3) {
        print(" 27  28  29  30  31");
    } else if (startingDay == 4) {
        print(" 26  27  28  29  30  31");
    } else if (startingDay == 5) {
        print(" 25  26  27  28  29  30  31");
    } else if (startingDay == 6) {
        print(" 24  25  26  27  28  29  30  31");
    } else {
        print(" 23  24  25  26  27  28  29");
        print(" 30  31");
    }
}