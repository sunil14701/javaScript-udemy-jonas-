console.log("lecture 23");//the conditional (ternary) operator

// ternary operator or if -else statement shortcut
 let age=3;
 (age>=18)? console.log("you can drink wine🙌"):console.log("you can't drink wine🤦‍♂️");//this is an expressions

 //all operator have a value hence all operators are expressions
 let drink = age>18? "drink wine": "drink water";
 console.log(drink);

 // same code using if-else
 let drink2;//we have to declare drink2 varialbe outside the if-else block
 if(age>18){
    drink2="wine";
 }else{
     drink2 = "water";
 }
 console.log(`you can drink ${drink2}`);

 //we can use expressins in template literals.we can't use if-else statement.
 console.log(`you have to drink ${age>=18? "wine":"water"}`);