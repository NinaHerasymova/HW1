function minEl(arr){
    var min=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]<min){
            min= arr[i];
        }
    }console.log(min);
}
minEl(arr)