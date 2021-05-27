console.log("CODING CHALLANGE #1");

//case1
let marksWeight1 =78; 
let marksHeight1 =1.69 ;
let johnsWeight1 =92;
let johnsHeight1 =1.95;

let johnBMI = johnsWeight1/(johnsHeight1**2);
let markBMI = marksWeight1/(marksHeight1**2);

let markHigherBMI = markBMI>johnBMI;
console.log(markBMI,johnBMI);
console.log("case1: "+ markHigherBMI) 

//case2
let marksWeight2 =95; 
let marksHeight2 =1.88 ;
let johnsWeight2 =85;
let johnsHeight2 =1.76;


let johnBMI2 = johnsWeight2/(johnsHeight2**2);
let markBMI2 = marksWeight2/(marksHeight2**2);

let markHigherBMI2 = markBMI2>johnBMI2;
console.log(markBMI2,johnBMI2);
console.log("case2: "+ markHigherBMI2) 
