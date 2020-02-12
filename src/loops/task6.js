"use strict"

function reverse(num) {
    var result = 0;
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    console.log(result);
}

reverse('659')