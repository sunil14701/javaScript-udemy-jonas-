'use strict';
console.log('lecture 010');//basic array operations methods

const friends = ['sunil','rajat','inderjot'];
console.log(friends);
friends.push('adarsh');//it mutated the original array. it add a element in the end of the array.
console.log(friends);//since push is a function so it can also return something.

const capture = friends.push('shilpa');
console.log(capture);//return value of push function is the number of elements in the array.

//entering element in the begining of the array
friends.unshift('arshdeep');
console.log(friends);

// remove elements from the array
friends.pop();//it removes the last element of the array from the end
friends.pop();//it returns the removed element  from the end
console.log(friends.pop());
console.log(friends);
friends.shift();//it also return the popped element
console.log(friends);

//finding the index of the element
console.log(friends.indexOf('rajat'));
console.log(friends.indexOf('bob'));

//this is an  ES6 method and this is called include (*imp)
console.log(friends.includes('bob'));
console.log(friends.includes('rajat'));
friends.push('23');//23 is in format of string
console.log(friends.includes(23));//it will return false because it uses === (strict) checking . 23(string ) is different from 23 number 

if (friends.includes('rajat')){
    console.log('you have a friend called rajat');
}

