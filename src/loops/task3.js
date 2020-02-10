function sqrt(num) {
    if (num >= 0) {
        var root = 0;
        while (root * root <= num) {
            root++
        }
        console.log('Root approx = ' + (root - 1))
    } else { console.log("Number is not natural!!!!") }
}
sqrt(prompt('Enter your number'))