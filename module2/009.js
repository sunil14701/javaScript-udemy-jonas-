console.log("lecture 009");//basic operators

//math operators
const nowYear = 2022;
const sunilAge = nowYear - 2001;//obeys Do Not Reapeat rule
const ruchiAge = nowYear - 2001;
console.log("Sunil age is "+sunilAge+" year old");//we can also use template literals or string literals.
console.log("Ruchi age is "+ruchiAge+" year old");

console.log(2**3);//2 raise to the power 3
console.log(sunilAge+9,sunilAge/3);

//string template : 
const firstName = "Sunil";
const lastName = "Kumar";
console.log(firstName  +" "+ lastName);//use of + operator
let mySelf = `Hello , my name is ${firstName} ${lastName}`;//use o template literals
console.log(mySelf);//use of backtick are necassary in string template

// Assignment operators
let x = 10+5;
x+=5;//x=x+5
x*=2;//x=x*2
x++;

console.log(x--);

//comparision operator
console.log(sunilAge >= ruchiAge);
let isFullAge = ruchiAge>=18;//the variable will only store boolean value
console.log(isFullAge);
console.log(nowYear - 2021 === nowYear -2021);


// we can do console.log(var1,var2,var3);