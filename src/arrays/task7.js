var arr=[1, 3,9,56, 560,506,45, 13, 28, 22];

function oddElSum(arr){
    var count = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==!0){
            count++;
        }
    }console.log(count);
}
oddElSum(arr)