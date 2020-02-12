"use strict"
const add = (a, b, c) => {
    if (a * b * c > a + b + c) {
        console.log(a * b * c + 3)
    } else if (a * b * c < a + b + c) {
        console.log(a + b + c + 3)
    } else {
        console.log("Expressions are equal")
    }
}
add(0, 0, 0)