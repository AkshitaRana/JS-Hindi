// const userEmail = ""
// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't get user email");
// }

// We use to assume something as true and something as false (truthy/falsy)

// falsy value - false, Undefined, Null, Nan, "", 0, -0, BigInt 0n

// truthy value - "0", 'false', " ", [], {}, function(){}



// How to check array is empty
// const email = []
// if (email.length === 0){
//     console.log("Array is empty");
// }


// How to check object is empty
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("Object is empty");
// }

//Nullish Coalescing Operator (??): null undefined
// (way to avoid errors)

let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 20
// val1 = undefined ?? 20 ?? 10

// console.log(val1);


// Ternary Operator
// condition ? true : false

const score = 100
score<=80 ? console.log("Less than 80") : console.log("More than 80");