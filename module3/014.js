'use strict';

console.log('lecture 14');//objects methods
//like arrays can contain arrays in themselves 
// objects can also store object 
// functions are just another type of value so functions can also be used in object
//we can add function to the objects
const jonas = {
    firstName : "sunil",
    lastName : "kumar",
    location : "chandigarh",
    hasDrivingLicence : false,
    birthYear:2001,

    calcAge:function(birthYear){//function as a key : value pair
            return 2021-birthYear;//any function which is attached to an object is known as method. this function is an expression
    },

    // function calcAge(birthYear){
    //     return 2021-birthYear;  //this is not a key value pair hence this will not work. this function is a declaration
    // }


    //use of this keyword. this keyword is equal to object calling the method
    calcAge2 : function(){
        console.log(this);//this gives the key :value pair of the object
        return 2021-this.birthYear;
        return 2021-jonas.birthYear;//will work the same like this keyword but will violate dry principal

    },


    //use less resources
    calcAge3 : function(){
        this.age/*creating new object */ = 2021-this.birthYear;
        return this.age;
    }


};

//passing birthYear as a parameter 
let age = jonas.calcAge(jonas.birthYear);
console.log(age);

    //calling function using bracket
    console.log(jonas['calcAge'](jonas.birthYear));

    // calling function using dot
    console.log(jonas.calcAge(jonas.birthYear));

// using of this keyword
console.log(jonas.calcAge2());//this keyword is working because jonas is calling the function(calcAge2) . in this method this keyword points to jonas now


//calling calcAge2 multiple times can consume more resources  of the computer so we have to store the returned value . than calculated value can be stored and less resources would be use
console.log(jonas.calcAge3());
console.log(jonas.calcAge3());
console.log(jonas.calcAge3());

//created a new object
console.log(jonas.age);


//#challange
//method called get summary (getSummary) should return the string which summarize the data about jonas
const jonas2 ={
    firstName : "sunil",
    lastName : "kumar",
    job:'student',
    location : "chandigarh",
    hasDrivingLicence : true,
    birthYear:2001,
     getSummary : function(){
         return `${this.firstName} is a ${this.age = 2021-this.birthYear} year old ${this.job} , and he has  ${this.hasDrivingLicence?'a ':'no'} driving liciance   ` 

}
}
console.log(jonas2.getSummary())

//arrays are special kind of object . that is why arrays can be manupulated . by using push , pop,unshift functions