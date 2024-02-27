//Types of datatype-

// 1) Primitive-(7) number, string, boolean, null, undefined, symbol, BigInt

// const score = 100 [number]
// const scoreValue = 1000.3 [number]
// const isLoggedIn = false [boolean]

// const temp = null [object]
// let email; [undefined]

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id==anotherId)
// console.log(typeof id); [symbol]

let bigInteger = 35777865358n
// console.log(typeof bigInteger); [bigint]




// 2) Non-primitive(Reference)- array, object, functions

const heros = ["Batman", "Spiderman", "Ironman"]
// console.log(typeof heros); [object]
let obj = {
    name:"Akshita",
    age: 56,
}
// console.log(typeof obj); [object]

const myFunction = function(){
    console.log("Hello World")
}
// console.log(typeof myFunction) [function]

// ****Javascript is a dynamically typed lang because we don't declare type of variable.****


// ######################################################################################


// Types of memory- Stack (Primitive)-copy, Heap (Non-primitive)-reference of original data

let user = "Fantastic"
let user2 = user

user2 = "Outstanding"
// console.log(user);
// console.log(user2);


let userOne = {
    name: "Akshita",
    email: "user@gmail.com",
}

let userTwo = userOne;

userTwo.email = "asdgoogle.com"

// console.log(userOne.email);
// console.log(userTwo.email);