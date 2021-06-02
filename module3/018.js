'use strict';
console.log('lecture 018');//looping backwards and loops in loops

let jonasArray = [
            'sunil','kumar','student' ,['rajat','adarsh','inderjot'],2021-2001
];
console.log(jonasArray);
for(let i=jonasArray.length-1;i>=0;i--){
    console.log(i,jonasArray[i]);
    
}
for(let exercise=0;exercise<3;exercise++){
    console.log(` ------starting exercise------${exercise+1}`);
    for(let i=0;i<5;i++){
        console.log(`do exercise${exercise+1} ${i+1} 🙃`);
    }
    
}