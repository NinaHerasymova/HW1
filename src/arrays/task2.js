function maxEl(arr){
    var max=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }console.log(max);
}
maxEl(arr)