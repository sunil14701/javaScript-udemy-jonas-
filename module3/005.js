'use strict';
console.log('lecture 5');//arrow function

const ageCalculator=function (birthYear){
    return 2021-birthYear;
}

//arrow function
const ageCalculator3 = birthYear=>2021-birthYear;//only one parameter i.e birthyear
console.log(ageCalculator3(2001));

//arrow function with multi parameter
const retirementAge = (birthYear,firstName )/*multi paramnter*/ =>{
    const age =2021 - birthYear;//more than one line of code
    let retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(retirementAge(2001,'sunil'));