'use strict';
console.log("lecture #20"); //#coding challenge #4

let bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

let i=0;
const calcTip = function(){
                return `your bill(${i+1}) is ${bills[i]} and your tip is ${bills[i]>50 && bills[i]<300?tips[i]=bills[i]*0.15:tips[i]=bills[i]*0.20} ,hence your total is ${totals[i] = bills[i]+tips[i]}`;

}
for( i=0;i<bills.length;i++){
    console.log(calcTip());
    tips.push(tips[i]);
    totals.push(totals[i]);

}   
    console.log(bills);
    console.log(tips);
    console.log(totals);
