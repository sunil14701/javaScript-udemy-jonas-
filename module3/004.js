'use strict';
console.log("lecture 004");//function declaration VS expressions

//function declaration
ageCalculator(2002);//we can call function prior to declaration of the function. it is not true for functon expression. this is because of the process called hoisting

function ageCalculator(birthYear){
    let currentYear = 2021;
    console.log(`your age is ${currentYear-birthYear}`);

}


//function expressions - function without a name or functions with anamomas function
//an expresson produces a value
const ageCalculator2 = function (birthday){
    return 2021 - birthday;

}
console.log(ageCalculator2(2001));
