'use strict';
console.log('lecture 12');//intro to objects

//objects is another data structure in js
// in objects we define key-value pair

const jonas = {
    firstName:'sunil',//value=properties
    lastName:'kumar',
    age:2021-2001,
    job:'student',
    friends:['rajat','adarsh','inderjot']//no semi-colon is needed

}//this object which is called jonas has five properties
//it is also called object literal syntax
console.log(jonas);

//just like an array we use objects to essentially group together diff variables that really belong together such as the property of jonas

//diff between objects and a array
//the order of the values does not matter at all when we want to retrieve them. in array the order in which we specify the elements matter a lot because that's how we access the element
//we should use array for more ordered data and object for more unstructured data and data that we actually want to name then retrieve from the object by the name