'use strict';
console.log("lecture 7");//reviewing function

// const firstName = 'Sunil';


const calcAge = function (birthYear){
    const age = 2021 - birthYear;
    return age;

}
// 1)copy function
const yearsUntilRetirement =function (birthYear2,firstName){
                                const age2 = calcAge(birthYear2);
                                const retirement = 65 - age2;
                                console.log('the will  be shown');
                                if (retirement>0){
                                    return  `${firstName} will retire in ${retirement} years`;

                                }else{
                                    return  -1;//because of return the funcition end immediately after returing the value(-1 in this case)
                                }
                                console.log('the will not be shown');//this will not be shown because of return 
}

console.log(yearsUntilRetirement(2001 ,'sunil'));
console.log(yearsUntilRetirement(1940 ,'rajat'));
