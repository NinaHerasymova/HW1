function minIndex() {
    var min = 0;
    for (i = 1; i<arr.length; i++) {
        if (arr[i]<arr[min]) {
            min = i;
        }
    }console.log(min);
}
minIndex(arr);