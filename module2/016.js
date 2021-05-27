console.log("lecture 16");

// five faulty values :  0,'',undefined,null,NaN
// this above 5 values will be convered into false when we convert them into boolean

//everything else is truthy value


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean(''));
console.log(Boolean({}));

let money = 1;
if(money){
console.log("you have money");
}else{
    console.log("you do not have money");
}


let height;
if (height){
    console.log("yay! height is defined");

}else{
    console.log("naa , height is not defined");
}