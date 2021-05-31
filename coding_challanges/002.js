'use strict';
console.log('coding challange #2');//#2

// case1
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const BMIMark = markWeight/(markHeight*markHeight);
// const BMIJohn = johnWeight/(johnHeight*johnHeight);

// // console.log(`BMI of mark is ${BMIMark}`);
// // console.log(`BMI of john is ${BMIJohn}`);
// const markHeigherBMI = BMIMark>BMIJohn;

// if(markHeigherBMI){
// console.log(`mark ${BMIMark} has higher BMI than john ${BMIJohn}`);
// }else{
//     console.log(`john ${BMIJohn} has higher BMI than mark ${BMIMark}`);
// }

const markWeight = 95;
const markHeight = 1.69;
const johnWeight = 85;
const johnHeight = 1.76;

const BMIMark = markWeight/(markHeight*markHeight);
const BMIJohn = johnWeight/(johnHeight*johnHeight);

console.log(`BMI of mark is ${BMIMark}`);
console.log(`BMI of john is ${BMIJohn}`);
const markHeigherBMI = BMIMark>BMIJohn;


        if(markHeigherBMI){
        console.log(`mark ${BMIMark} has higher BMI than john ${BMIJohn}`);
        }else{
            console.log(`john ${BMIJohn} has higher BMI than mark ${BMIMark}`);
        }