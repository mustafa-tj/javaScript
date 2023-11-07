const accountId = 515253
let accountEmail = "mus@gmail.com"
var accountPassword = "3039"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "m@gmail.com"
accountPassword = "303951"
accountCity = "Pune"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])