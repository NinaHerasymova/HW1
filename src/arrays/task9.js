"use strict"
var arr=[1, 3,9,56, 560,506,45, 13, 28, 22];
function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    console.log(arr);
};
bubbleSort(arr)


"use strict"
function selectionSort (arr) {
    for (var i = 0, l = arr.length, k = l - 1; i < k; i++) {
        var indexMin = i;
        for (var j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    console.log(arr);
};
selectionSort (arr)


"use strict"
function insertSort (arr) {
    for (var i = 1, l = arr.length; i < l; i++) {
        var current = arr[i];
        var j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    console.log(arr);
};
insertSort (arr)