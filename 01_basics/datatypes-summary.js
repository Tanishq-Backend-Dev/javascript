// Primitive (Call by value)
// 7 types: String, Boolean, Number, BigInt, null, undefined, symbol.

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; 
const id = Symbol('123');
const anotherId = Symbol('123');


// Non-Primitive (Call by reference)
// Array, Objects, Functions

const heros = [`shaktiman`, 'naagraj', 'doga'];
const person = {
    name: `tanishq`,
    age: 22
}

const myFunction = function(){
    console.log(`Hello World`);
}

// =====================================================================

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "ChaiOrCode";
let anotherYoutubeName = myYoutubename;
anotherYoutubeName = "Telusko";

console.log(myYoutubename);
console.log(anotherYoutubeName);