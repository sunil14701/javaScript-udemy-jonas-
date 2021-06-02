'use strict';
console.log('lecture 13');//dot VS bracket notation

const mySelf = {
                firstName:'sunil',
                lastName:'kumar',
                age:2021-2001,
                job:'student',
                salary:0,
                friends:['rajat','adarsh','inderjot']//don't need to putsemi-colon. 


}
console.log(mySelf);//properties in console will be ordered alphabetically in the console

//extract property from the object
console.log(mySelf.firstName);//dot notation
console.log(mySelf['lastName']);//bracket notations
console.log(mySelf.firstName.length);//gives the length of the string
let container = mySelf.lastName;//it return the value 
console.log(container);

const nameKey = 'Name';
console.log(mySelf['first' + nameKey]);
console.log(mySelf['last' + nameKey]);

// console.log(mySelf.('first' + nameKey));//it will not work with dot notation. in dot property the computed property name will not work

const answer=prompt(`what do you want to choose .
            firstName
            lastName
            age
            job
            friends`);
console.log(answer);
// console.log(mySelf.answer);//this will gitve you undefined . when the property is not there in the object.
console.log(mySelf[answer]);//this will move

if(mySelf[answer]){
console.log(mySelf[answer]);
}else{
    console.log("property does not exist");
}

//adding new propery using dot and bracket notation
mySelf.location = 'chandigarh';
mySelf['instagram'] = 'private';
console.log(mySelf);

//#challange
// 'jonas has 3 friends and his best friend is called michale'
console.log(`${mySelf.firstName} has ${mySelf.friends.length} and his best friend is ${mySelf.friends[0]}`);

// . notation is AKA member access
// [] notation is AKA computed member access
//  , and [] read from left to right