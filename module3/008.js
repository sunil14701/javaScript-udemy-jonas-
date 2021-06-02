'use strict';
console.log('lecture 008');//coding challenge #1//this is incomplete file?this is not working

// // case1
//given data
const dolphinsScore1 = 44;
const dolphinsScore2 = 23;
const dolphinsScore3 = 71;

const koalasScore1 = 65;
const koalasScore2 = 54;
const koalasScore3 = 49;

//function to calculate the average score
const calcAvg =  (Score1,Score2,Score3)=>{
                        return (Score1+Score2+Score3)/3;
}


//storing average values
const avgDolphins = calcAvg(dolphinsScore1,dolphinsScore2,dolphinsScore3);
const avgKoalas = calcAvg(koalasScore1,koalasScore2,koalasScore3);
console.log(` (${avgDolphins} vs ${avgKoalas})`);

function checkWinner(avgDolphins,avgKoalas)
{
    if(avgDolphins>=(2*avgKoalas)){
        console.log(`dolphin wins (${avgDolphins} vs ${avgKoalas})`);
    }
    else if(avgKoalas>=2*avgDolphins){
        console.log(`koalas win (${avgDolphins} vs ${avgKoalas})`);
    }
    else{
        console.log(`no team wins (${avgDolphins} vs ${avgKoalas})`);
    }//don't know why this is not working??????
    
    console.log('hi');//don't know why this is not working??????
}

// checkWinner(avgDolphins,avgKoalas)

// case2
// //given data
// const dolphinsScore1 = 85;
// const dolphinsScore2 = 54;
// const dolphinsScore3 = 41;

// const koalasScore1 = 23;
// const koalasScore2 = 34;
// const koalasScore3 = 27;

// //function to calculate the average score
// const calcAvg =  (Score1,Score2,Score3)=>{
//                         return (Score1+Score2+Score3)/3;
// }


// //storing average values
// const avgDolphins = calcAvg(dolphinsScore1,dolphinsScore2,dolphinsScore3);
// const avgKoalas = calcAvg(koalasScore1,koalasScore2,koalasScore3);


// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins>=(2*avgKoalas)){
// console.log(`dolphin wins 🥇 (${avgDolphins} vs ${avgKoalas})`);
//     }else if(avgKoalas>=2*avgDolphins){
//         console.log(`koalas win 🥇 (${avgDolphins} vs ${avgKoalas})`);
//     }else{
//         console.log('no team wins');
//     }

// }

// checkWinner(avgDolphins,avgKoalas);