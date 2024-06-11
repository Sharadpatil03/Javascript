// Variables in Js
console.log("Variables in Js ");

const accountId=12343;
let accountEmail="sharad@gmail.com";

var accountPassword="12345";

accountCity="Kolhapur";
let accountState;



// accountId=2;      not allowed
console.log(accountId);

accountEmail="abc@gmail.com";
console.log(accountEmail);


// console.table 
console.table([accountId,  accountEmail, accountPassword]);

// undefined 
console.log(accountState);

/* 
prefer not to use var , bcoz of issue in block scope and functional scope.
*/


