let score="33"

let score1="234abc";

console.log(typeof score);
console.log(typeof (score))

let valueInNumber=Number(score);
console.log(typeof valueInNumber);

let valueInNumber1=Number(score1);
console.log(typeof valueInNumber1);  // checking typeS
console.log(valueInNumber1); //printing value gives NaN (not a number)



// "33" =>33
// "33abc" =>NaN
// true =>1  , false =>0

let isLoggedIn=1;

let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // =>boolean
console.log(booleanIsLoggedIn);   // =>true

// 1 =>true;     0 =>false
// " " =>false;    "hitesh" =>true


let no=1334;

let strNumber=String(no);
console.log(typeof no);
console.log(no);

