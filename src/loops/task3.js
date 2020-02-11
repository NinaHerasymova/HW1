function sqrt(num) {
    if (num >= 0) {
        var root = 0;
        while (root * root <= num) {
            root++
        }
        var res = root-1;
        console.log('Root approx = ', res)
    } else { console.log("Number is not natural!!!!") }
}
sqrt(30)