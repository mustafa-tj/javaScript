// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 88
const scoreValue = 88.8

const isLoggedIn = false
const temperature = null
let userEmail;

const id = Symbol('5253')
const anotherId = Symbol('5253')

console.log(id === anotherId);

const bigNumber = 3525258018n 

// Reference (Non primitive)
// Array, Objects, Functions

const cars = ['BMW','Audi', 'Ferrari']

let myDetails = {
    name: "Mustafa",
    age: 25
}

const myFunction = function(){
    console.log("Hello world");

}

console.log(typeof anotherId);


// ---------------Memories in JS------------------

// Stack (Primitive), Heap (Non-Primitive)

// example of stack memory
let myName = "Mustafa"

let anotherName = myName
anotherName = "mustu"

console.log(myName);
console.log(anotherName);

// example of heap memory
let userOne = {
    person: "Mustafa",
    email: "mustafa@google.com"
}

let userTwo = userOne

userTwo.email = "tj@google.com"

console.log(userOne.email);
console.log(userTwo.email);