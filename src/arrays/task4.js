function maxIndex() {
    var max = 0;
    for (i = 1; i<arr.length; i++) {
        if (arr[i]>arr[max]) {
            max = i;
        }
    }console.log(max);
}
maxIndex(arr);