function getDay(){
    var data=new Date();
       var today=data.getDay();
       var day='';

       switch(today){
       case 1:
       day='Monday';break;
       
       case 2:
       day='Tuesday';break;
      
       case 3:
       day='Wednesday';break;
      
       case 4:
       day='Thursday';break;
      
       case 5:
       day='Friday';break;
       
       case 6:
       day='Saturday';break;
       
       case 7:
       day='Sunday';break;
       
       
   }

   console.log('Today is '+day)
}
getDay();