'use strict'
console.log('lecture 019');//the while loop

let i=0;
while(i<10){
console.log(i+1);
i++;
}


//how to generate a random number
let dice = (Math.trunc(Math.random()*6)+1);//this generate random number.
console.log(dice);

while(dice!==6){
    console.log( `you entered  ${dice}`);
 dice = (Math.trunc(Math.random()*6)+1);//this generate random number.
 if(dice===6){
console.log('loop is about to end');
 }
}
console.log("stop");

//use while loop when you do not know how many iterations will happen