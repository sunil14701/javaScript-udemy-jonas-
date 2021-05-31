'use strict';
console.log('lecture 6');//functions calling other functions

function foodProcessor(apples,oranges){
    const applespieces = cutFruitPieces(apples);
    const orangespieces = cutFruitPieces(oranges);


    const juice = `juice with ${applespieces} applespieces and ${orangespieces} orangespieces  `;
    return juice;

}
function cutFruitPieces(fruits){
    return fruits*4;
}

console.log(foodProcessor(2,4));