'use strict';
console.log('lecture 017');//looping array , breaking and continue

//for array we use [] brackets and for object we use {} brackets  
const jonasArray=[
                    'jonas','kumar',2021-2001,'student',['rajat','adarsh','inderjot'],true
];

//reading the jonasArray
for(let i=0;i<jonasArray.length ;i++){
    console.log(jonasArray[i],typeof jonasArray[i]);
}
const jonasArray2=[
]

//filling the jonasArray2
for(let i=0;i<jonasArray.length;i++){
    // jonasArray2.push(typeof jonasArray[i]);
    jonasArray2[i] = typeof jonasArray[i];
    
}
console.log(jonasArray2);



const year = [1991,1994,1997,2001,2005,2009];
const age=[];
for(let i=0;i<year.length;i++){
    age.push( 2021-year[i]);
}
console.log(age);


// continue and break statement
// continue= continue is to exit the current iteration of the loop
//break = break is to completely terminate the whole loop

console.log('----only strings----');
for(let i=0;i<jonasArray.length ;i++){
    if(typeof jonasArray[i]!=="string") continue;
    console.log(jonasArray[i],typeof jonasArray[i]);
}
// console.log( jonasArray);
console.log("---use of break ----");
for(let i=0;i<jonasArray.length;i++){
    if(typeof jonasArray[i]==="number")
    {
            console.log(jonasArray[i],typeof jonasArray[i]);
            break;

        }
}
