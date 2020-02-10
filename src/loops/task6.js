function reverse(num) {
    var result = 0;
    while (num) {
        result = result* 10 + num % 10;
        num = Math.floor(num / 10);
    }
    alert(result);
}
reverse(prompt('Enter the number'))