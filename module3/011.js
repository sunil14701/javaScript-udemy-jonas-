'use strict';
console.log('lecture 11');//coding challange #2

function calcTip(bill){
    let tip;
    return (bill>50 && bill<300 )?tip=bill*.15:tip=bill*.20;
}

console.log((calcTip(100)));

let bills = [125,555,44];
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills);
console.log(tips);
console.log(total);