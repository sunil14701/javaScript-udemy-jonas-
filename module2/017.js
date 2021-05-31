console.log("lecture 17");//equality operator == VS ===

let age  = 18;
if(age===18) console.log("congratulations you are now an adult");//it does not perform type coercion . and it return true when both values are exactly the same. (Strictly)

if(age=='18') console.log("yay! you are good");//it performs type coersion .


const favNum = Number(prompt("what's your favourite number ? "));
console.log(favNum);//prompt gives us a string not a number so == can be used byut not === , loose
console.log(typeof favNum);
if(favNum===23){
    console.log("you have selected 23");
}else if(favNum!==7){
    console.log("you have selected 7");
}
else{
    console.log("you have selectd wrong number");
}

// always use strict version in compariosion