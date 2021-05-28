'use strict'
console.log("lecture 003");//functions

// functions - a variable can hold one line of code but a function can hold a more line of code.
//choose descriptive function/variable name .
//functions are used to maintain reuseable code or follow dry principle

//function
function greet(){
    let var1 = 'sk';
    console.log(`good morning sunil kumar ${var1}`);
}

//calling ,invoking ,running function
greet();
greet(23);//specifing the argument here or not will take no effect

// let juice ;
// functions with parameter and return value
function fruitFactory(apples,oranges){
    console.log(apples,oranges);
    let juice = `we are making juice of ${apples} apples and ${oranges} oranges . `;
    // console.log(juice);
    return juice;
}

let glass=fruitFactory('3','4');//returned value is stored into a variable
console.log(glass);
// console.log(juice);//juice is returned value which is declared in its own scope.
console.log(fruitFactory(2,3));//returned value is not stored into a variable

console.log();//it is also a function that is inbuilt function
Number('23');//it is also a function