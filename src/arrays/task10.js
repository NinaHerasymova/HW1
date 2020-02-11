


//---------------Quick--------------------------//
"use strict"
function defaultSortingAlgorithm (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };
function quickSort (
    unsortedArray,
    sortingAlgorithm = defaultSortingAlgorithm
  ) {

    var sortedArray = [ ...unsortedArray ];
    function recursiveSort (start, end) {

      if (end - start < 2) {
        return;
      }

      var pivotValue = sortedArray[end];
      var splitIndex = start;
      for (var i = start; i < end; i++) {
        var sort = sortingAlgorithm(sortedArray[i], pivotValue);

        if (sort === -1) {

          if (splitIndex !== i) {
            var temp = sortedArray[splitIndex];
            sortedArray[splitIndex] = sortedArray[i];
            sortedArray[i] = temp;
          }

          splitIndex++;
        }

      }

      sortedArray[end] = sortedArray[splitIndex];
      sortedArray[splitIndex] = pivotValue;

      recursiveSort(start, splitIndex - 1);
      recursiveSort(splitIndex + 1, end);
    };

    recursiveSort(0, unsortedArray.length - 1);
    console.log(sortedArray);
  };

quickSort(arr);

//------------------------Merge--------------------//
"use strict"

var mergeSort = function (arr) {

    function merge(left, right) {
        var result = [];
        var il = 0;
        var ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }
        return result.concat(left.slice(il)).concat(right.slice(ir));
        
    }
    function mergeSort(items) {
        if (items.length < 2) {
            return items;
        }
        var middle = Math.floor(items.length / 2);
        var left = items.slice(0, middle);
        var right = items.slice(middle);
        return merge(mergeSort(left), mergeSort(right));
    }
    console.log(mergeSort(arr));
    
};
mergeSort(arr)

//---------------------Shell---------------------------//

"use strict"
function shellSort (arr) {
    for (var h = arr.length; h > 0; h = parseInt(h/2)) {
        for (var i = h; i < arr.length; i++) {
            var k = arr[i];
            for (var j = i; j >= h && k < arr[j - h]; j -= h)
                arr[j] = arr[j - h];
            arr[j] = k;
        }
    }
    console.log(arr);
}
 shellSort(arr)


function heapSort(arr){
    createMaxHeap(arr);
    let endIndex = arr.length - 1;
    while(endIndex > 0){
      swap(arr, 0, endIndex);
      heapify(arr, 0, endIndex);
      endIndex--;
    }    
    console.log(arr);
  }

  //--------------------------Heap-----------------------------//
"use strict"
  function createMaxHeap(arr){
    let startIndex = Math.floor(arr.length / 2);
    while(startIndex >= 0){
      heapify(arr, startIndex, arr.length)
      startIndex--;
    }
  } 
  
  function heapify(arr, index, maxIndex){
    while(index < maxIndex){
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      
      let largestValueIndex = index;
      if (leftChildIndex < maxIndex && arr[leftChildIndex] > arr[largestValueIndex]){
        largestValueIndex = leftChildIndex;
      }
      if (rightChildIndex < maxIndex && arr[rightChildIndex] > arr[largestValueIndex]){
        largestValueIndex = rightChildIndex;
      }
      if(index === largestValueIndex){
        return;
      }
      swap(arr, index, largestValueIndex);
      index = largestValueIndex;
    } 
  }
  
  function swap(arr, indexA, indexB){
    let bufferValue = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = bufferValue;
  }
  
  heapSort(arr)