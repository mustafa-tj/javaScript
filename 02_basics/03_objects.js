// singleton
// Object.create
// object literals

const mySymbol = Symbol('something')
const JsUser = {
    name: "Mustafa",
    "Full name": "Mustafa Khargonewala",
    age: 25,
    [mySymbol]: "smthng", // symbol is written in square brackes only
    location: "Jaipur",
    email: "mus@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email); // one way
// console.log(JsUser["email"]); // other way
// console.log(JsUser["Full name"]); // The onlyy way
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser[mySymbol]);

JsUser.email = "mk@gmail.com"
// Object.freeze(JsUser) // after freeze, you cannot change the values of object.
// JsUser.email = "tj@123"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${name}`); // error - name is not defined
// }

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // error - name is not defined
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());