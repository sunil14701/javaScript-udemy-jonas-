console.log("lecture 21");//the switch statement

let day0 = "tuesday";

switch(day0){
    case 'monday'://it uses strict comparision ===
        console.log("plan the week");
        console.log("dont sleep");
        break;
    case 'tuesday':
            console.log("play cricket");
            console.log("dont sleep");
            break;
    
    case 'wednesday':
        console.log("go college");
        console.log("dont sleep");
        break;
    case 'thursday':
        console.log("work hard");
        console.log("dont sleep");
        break;
    case 'friday':
        console.log("study hard");
        console.log("dont sleep");
        break;
    case 'saturday':
        console.log("go play");
        console.log("dont sleep");
        break;
    case 'sunday':
        console.log("its sunday");
        console.log("dont sleep");
        break;
        
    default:
        console.log("invalid week days");
}

// same above example using if - else
let day1 = "monday";
if(day1==="monday"){
    console.log("plan the week");
    console.log("dont sleep");
}else if(day1==="tuesday"){
        console.log("play cricket");
        console.log("dont sleep");
}else if(day1==="tuesday"){
        console.log("play cricket");
        console.log("dont sleep");
}else if(day1==="wednesday"){
        console.log("play cricket");
        console.log("dont sleep");
}else if(day1==="thursday"){
        console.log("play cricket");
        console.log("dont sleep");
}else if(day1==="friday"){
        console.log("play cricket");
        console.log("dont sleep");
}else if(day1==="saturday"){
        console.log("play cricket");
        console.log("dont sleep");
}else{
    console.log("its sunday");
        console.log("dont sleep");

}