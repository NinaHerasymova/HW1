"use strict"

const max = (a, b, c) => {
    let summ = 0;
    if (a > 0) {
        summ = summ + a;
    }
    if (b > 0) {
        summ = summ + b;
    }
    if (c > 0) {
        summ = summ + c
    }
    console.log(summ)
}
max(0, 5, 0)