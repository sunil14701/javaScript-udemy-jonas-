console.log("lecture 20");
//                          coding challange 3
console.log("Case1");
let dolphinScore1 = 96;
let dolphinScore2 = 108;
let dolphinScore3 = 89;

let kolasScore1 = 88;
let kolasScore2 = 91;
let kolasScore3 = 110;

let dolphinAverage = (dolphinScore1+dolphinScore2+dolphinScore3)/3;//97
let kolasAverage = (kolasScore1+kolasScore2+kolasScore3)/3;//96.33

if(dolphinAverage  > kolasAverage  && dolphinAverage>100 && kolasAverage>100){
    console.log("dolphins wins the tournment");
    
}
else if(dolphinAverage === kolasAverage  && dolphinAverage>100 && kolasAverage>100){
    console.log("they both have tie");
}
else if (kolasAverage > dolphinAverage && dolphinAverage>100 && kolasAverage>100 ){
    console.log("kolas wins the tournment ");
}
else{
    console.log("the average is less than 100 so draw 😂😂");
}

//                          bonus 1
console.log("Case2");
let dolphinScoreBonus1 = 97;
let dolphinScoreBonus2 = 112;
let dolphinScoreBonus3 = 101;

let kolasScoreBonus1 = 109;
let kolasScoreBonus2 = 95;
let kolasScoreBonus3 = 123;

let dolphinAverageBonus = (dolphinScoreBonus1+dolphinScoreBonus2+dolphinScoreBonus3)/3;//103
let kolasAverageBonus = (kolasScoreBonus1+kolasScoreBonus2+kolasScoreBonus3)/3;//109

if(dolphinAverageBonus  >kolasAverageBonus && dolphinAverageBonus>100 && kolasAverageBonus>100 ){
    console.log("dolphins wins the tournment");
    
}
else if(dolphinAverageBonus ===kolasAverageBonus && dolphinAverageBonus>100 && kolasAverageBonus>100){
    console.log("they both have tie");
}
else{
    console.log("kolas wins the tournment ");
    
}

// bonus 2
console.log("Case3");
let dolphinScoreBonus01 = 97;
let dolphinScoreBonus02 = 112;
let dolphinScoreBonus03 = 101;

let kolasScoreBonus01 = 109;
let kolasScoreBonus02 = 95;
let kolasScoreBonus03 = 106;

let dolphinAverageBonus0 = (dolphinScoreBonus01+dolphinScoreBonus02+dolphinScoreBonus03)/3;//103.33
let kolasAverageBonus0 = (kolasScoreBonus01+kolasScoreBonus02+kolasScoreBonus03)/3;//103

if(dolphinAverageBonus0  >kolasAverageBonus0 && dolphinAverageBonus0>100 && kolasAverageBonus0  ){
    console.log("dolphins wins the tournment");

}
else if(dolphinAverageBonus0 ===kolasAverageBonus0 &&  dolphinAverageBonus0>100 && kolasAverageBonus0){
console.log("they both have tie");
}
else{
    console.log("kolas wins the tournment ");

}





