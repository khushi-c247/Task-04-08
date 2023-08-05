import { log } from "console";

const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
let sumRight: number = 0;
let sumLeft: number = 0;
let mult, divi, mid, rightSum, leftSum: number;

//Sort Array in decending order
const sortArray = (arr: number[]) => {
    for (let i in arr) {
        for (let j in arr) {
            if (arr[i] > arr[j]) {
                let swap: number = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }

        }
    }
}

const midNum = Math.floor(arr.length / 2);

//divide middle number 
const divMid = (multNum: number): number => {
    let divi = multNum / midNum
    return divi;
}

//multiplication of sums
const sumMulti = (sumLeft: number, sumRight: number): number => {
    mult = sumLeft * sumRight;
    return mult;
}

//Total sum of left digits
const RightNumsSum = (midNum: number, arr: number[]): number => {
    for (let i in arr) {
        if (parseInt(i) > midNum) {
            sumRight = sumRight + arr[i];

        }
    }
    return sumRight;
}

// Total sum of right digits
const LeftNumsSum = (midNum: number, arr: number[]): number => {
    for (let i in arr) {
        if (parseInt(i) + 1 < midNum) {
            sumLeft = sumLeft + arr[i];
        }
    }
    return sumLeft;

}

sortArray(arr);
console.log(`Reversed Array ${arr}`);
rightSum = RightNumsSum(midNum, arr);
leftSum = LeftNumsSum(midNum, arr);
mult = sumMulti(leftSum, rightSum)
divi = divMid(mult)
console.log(`Right digits sum : ${rightSum}`);
console.log(`Left digit sum : ${leftSum}`);
console.log(`Multiplication : ${mult}`);
console.log(`Division : ${divi}`);














