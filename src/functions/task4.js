function distance(a1, b1, a2, b2) {
    var a1=prompt('Enter x-coordinate of the first point:'); 
    var b1=prompt('Enter y-coordinate of the first point:');
    var a2=prompt('Enter x-coordinate of the second point:');   
    var b2=prompt('Enter y-coordinate of the second point:');

    
    var result=Math.sqrt((a1-a2)*(a1-a2)+(b1-b2)*(b1-b2));
    

    console.log(result)

}
distance();