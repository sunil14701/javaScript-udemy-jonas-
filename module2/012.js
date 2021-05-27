console.log("lecture 12");

const firstName = 'jonas';
let job = 'student ';
let currentYear = 2021;
const birthYear = 2001;

let jonas = "i'm " + firstName + ", a " + job + ( currentYear - birthYear)+" year old";
console.log(jonas);

//template literals
let jonas2 = `i'm ${firstName} , a ${job} . i'm ${currentYear-birthYear} year old`;
console.log(jonas2);

//multiline string
console.log(`h
w
e
r
t
y
u
i
`);