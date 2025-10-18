//  PRIMITIVE

// 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

//  Number => number
//  Boolean  => boolean
//  null  => object
//  undefined  =>  undefined
//  Symbol  =>  symbol
//  BigInt  =>  bigint
//  String  => string

// JS is dynamically typed

const score = 100
const scoreValue = 100.34
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 324394399492939239n

// REFERENCE (Non-primitive)

// Array, Objects, Functions

// Arrays  =>  object
// Object  =>  object
// Function  =>  function

const heros = ["shaktiman", "naagraj", "doga"]
let obj = {
    name: "Sushant",
    age: 22
}

const myFunction = function () {
    console.log("My function");
}

// myFunction();

