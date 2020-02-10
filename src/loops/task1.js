function evenSumm() {
    var sum = 0;
    var counter = 0;
    for (var i = 1; i <= 99; i++)
        if (i % 2 == 0) {
            sum += i;
            counter++;
        }
    console.log('Summ = ' + sum + '; ' + 'quantity = ' + counter)
}
evenSumm();