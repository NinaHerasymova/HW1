
function viceVersa(arr){
    var half = arr.length/2; //if arr.lenght is not even, should be decided, where the odd number should be placed and use Math.floor() or Math.ceil() 
    var arr1 = arr.splice(0, half);
    console.log(arr.concat(arr1));
}
viceVersa(arr)