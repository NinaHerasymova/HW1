"use strict"
function add() {

    let a = 2;
    let b = 6;
    let c = 3;

    if (a * b * c > a + b + c) {
        console.log(a * b * c + 3)
    } else if (a * b * c < a + b + c) {
        console.log(a + b + c + 3)
    } else {
        console.log("Expressions are equal")
    }
}
add(a,b,c)