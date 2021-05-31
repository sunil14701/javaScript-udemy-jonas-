'use strict';
console.log("coding challange #3");//#3
// case1
// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;

// const koalasScore1  = 88;
// const koalasScore2  = 91;
// const koalasScore3  = 110;

// const dolphinAvg = (dolphinScore1+dolphinScore2+dolphinScore3)/3;
// const koalasAvg = (koalasScore1+koalasScore2+koalasScore3)/3;

// if(dolphinAvg>koalasAvg){
// console.log(`dolphin ${dolphinAvg} wins the game over koalas${koalasAvg}`)
// }else if(dolphinAvg===koalasAvg){
//     console.log(`tie between both teams`);
// }else{
    
//     console.log(`  koalas ${koalasAvg} wins the game over dolphin ${dolphinAvg}`)
// }

// case2
// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;

// const koalasScore1  = 109;
// const koalasScore2  = 95;
// const koalasScore3  = 123;

// const dolphinAvg = (dolphinScore1+dolphinScore2+dolphinScore3)/3;
// const koalasAvg = (koalasScore1+koalasScore2+koalasScore3)/3;

// if(dolphinAvg>koalasAvg && dolphinAvg>=100 &&koalasAvg>=100){
// console.log(`dolphin ${dolphinAvg} wins the game over koalas${koalasAvg}`);
// }
// else if(dolphinAvg<koalasAvg  && dolphinAvg>=100 &&koalasAvg>=100){
//     console.log(`  koalas ${koalasAvg} wins the game over dolphin ${dolphinAvg}`);
// }
// else { 
//     console.log(`tie between both teams`);
// }

// case3
const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;

const koalasScore1  = 109;
const koalasScore2  = 95;
const koalasScore3  = 106;

const dolphinAvg = (dolphinScore1+dolphinScore2+dolphinScore3)/3;
const koalasAvg = (koalasScore1+koalasScore2+koalasScore3)/3;

if(dolphinAvg>koalasAvg && dolphinAvg>=100 &&koalasAvg>=100){
console.log(`dolphin ${dolphinAvg} wins the game over koalas${koalasAvg}`);
}
else if(dolphinAvg<koalasAvg  && dolphinAvg>=100 &&koalasAvg>=100){
    console.log(`  koalas ${koalasAvg} wins the game over dolphin ${dolphinAvg}`);
}
else { console.log(`dolphin ${dolphinAvg} koalas ${koalasAvg}`);
    console.log(`tie between both teams`);
}

