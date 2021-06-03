console.log("lecture 015");//type conversion and coercion

//type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 4);

const firstName = "jonas";
console.log(Number(firstName));
console.log(typeof Number(firstName));//invalid number but a number
console.log(typeof String(567));
console.log( Number(true));

//type coersion
console.log("i am " + 23 + " year old");//computer automatically convert number(23) into  a string.
console.log(`i am ${23} year old`);//use of string literals
console.log('23' + '5' + 1);//numbers are converted into string. only for addition case.
console.log('23' - '5' - 1);//strings are auto converted into numbers
console.log('12' / '4');//strings are converted into numbers
console.log('23'*3);//strings are connverted into numbers
console.log('34' > '2');

let n='1' +1;//11
n-=1;//10
console.log(n);

// 2 + 3 +'5' = 55
// '10' -'4'-'3'-2+'5' = 15//for addition numbers are converted into strings

//type conversion
// manually conversion from one type to another

//type coercion
//when js convert from one type to another automatically

//Number+string = string(number will be converted into string)
//js mein '1' +1 = 11 hota hai
