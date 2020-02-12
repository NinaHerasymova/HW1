"use strict"

const axe = (x, y) => {
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
axe(6, -25)
