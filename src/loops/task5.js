"use strict"

function digitSumm(num) {

    var result = 0;
    for (var i = 0; i < num.length; i++)
        result += Number(num[i]);
    console.log(result);
}

digitSumm('125')