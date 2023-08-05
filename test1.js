"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [1, 2, 3, 4, 5, 6, 7];
var sumRight = 0;
var sumLeft = 0;
var mult, divi, mid, rightSum, leftSum;
//Sort Array in decending order
var sortArray = function (arr) {
    for (var i in arr) {
        for (var j in arr) {
            if (arr[i] > arr[j]) {
                var swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    // sumNums(midNum, arr);
};
var midNum = Math.floor(arr.length / 2);
//divide middle number 
var divMid = function (multNum) {
    var divi = multNum / midNum;
    return divi;
};
//multiplication of sums
var sumMulti = function (sumLeft, sumRight) {
    mult = sumLeft * sumRight;
    return mult;
};
//Total sum of left digits and right digits
var RightNumsSum = function (midNum, arr) {
    for (var i in arr) {
        if (parseInt(i) > midNum) {
            sumRight = sumRight + arr[i];
        }
    }
    return sumRight;
};
var LeftNumsSum = function (midNum, arr) {
    for (var i in arr) {
        if (parseInt(i) + 1 < midNum) {
            sumLeft = sumLeft + arr[i];
        }
    }
    return sumLeft;
};
sortArray(arr);
console.log("Reversed Array ".concat(arr));
rightSum = RightNumsSum(midNum, arr);
leftSum = LeftNumsSum(midNum, arr);
mult = sumMulti(leftSum, rightSum);
divi = divMid(mult);
console.log("Right digits sum : ".concat(rightSum));
console.log("Left digit sum : ".concat(leftSum));
console.log("Multiplication : ".concat(mult));
console.log("Division : ".concat(divi));
