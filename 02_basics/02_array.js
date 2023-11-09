const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const allNewHeros = [...marvel_heros, ...dc_heros] // spread operator
// console.log(allNewHeros);

// const arr = [1,2,3,[4,5,6],7,8,[7,6,[5,8],4],9]
// console.log(arr);

// const flatArr = arr.flat(Infinity)
// console.log(flatArr);

console.log(Array.isArray("Mustafa")); // asking if its an array or not
console.log(Array.from("Mustafa")); // converting into an array
console.log(Array.from({name:"Mustafa"})); // Interesting interview question

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));