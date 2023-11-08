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