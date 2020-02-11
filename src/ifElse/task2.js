"use strict"

var x = 6;
var y = -25;
function axe(x, y) {
    if (x > 0 & y > 0) {
        console.log('I')
    } else if (x < 0 & y > 0) {
        console.log('II')
    } else if (x < 0 & y < 0) {
        console.log('III')
    } else if (x > 0 & y < 0) {
        console.log('IV')
    } else if (x == 0 || y == 0) {
        console.log('On axe!')
    }
}
axe(x, y)
