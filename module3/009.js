'use strict';
console.log('lecture 009');//intro to array aka first data structure


const friend1 = 'sunil';
const friend2 = 'rajat';
const friend3 = 'luv';
const friend4 = 'deepak';

//two most important data structure in js is arrays and objects.

//arrays
const friendsArray = ['sunil','rajat','deepak','luv'];
console.log(friendsArray);

//diff method for creating an array
const years = new Array(2001,2004,2001,2009,2005);
console.log(years);

//accessing the one element of the array
console.log(years[3]);//array index starts from zero

//finding number of element of the array
console.log(friendsArray.length);//gives us the number if element in the array

// how to find the last element of the array
console.log(years[years.length-1]);//gives the last element of the array. inside the square bracket js expects an expression not a statement.

//changing element name outside the array
friendsArray[2] = 'no friend';
console.log(friendsArray);

// note
// variable datatype const can not be changed but in array we can change the values. only primitive values are immutable but non-primitive values are mutable for eg-array.

//we can not change an entire array
// for eg - friendsArray = [12,32,45]; //this is illegal👎

//an array can hold values with different types all at the same time
const firstName  = 'sunil';
const bio = [firstName,'kumar',2021-2001/*a statement can not be stored but an expression can be stored*/,'student',friendsArray];
console.log(bio);
console.log(bio.length);



//Exercise
const calcAge = function(birthYear){
                return 2021-birthYear;
}

const year = [1992,1993,2001,2002];
console.log(calcAge(year[0]));
console.log(calcAge(year[1]));
console.log(calcAge(year[2]));
console.log(calcAge(year[year.length - 1]));

// if we add array to a number than the array will first converted to a string than two string will be added

//we can put function calls to an array
let arrays = [calcAge(year[0]),calcAge(year[2]),calcAge(year[3])] ;
console.log(arrays)
