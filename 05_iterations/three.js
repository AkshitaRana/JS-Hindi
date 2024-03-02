// for of loop
// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if (greet == " "){
        continue
    }
    // console.log(`Each value is ${greet}`);
}


// MAPS (follows the order of insertion and sets only unique value)
const myMap = new Map()
myMap.set('IN', "India")
myMap.set('USA', 'United States of America')
myMap.set('FR', 'France')
myMap.set('IN', "India")
// console.log(myMap);

// To print complete values
// for (const key of myMap) {
//     console.log(key);
// }

// To print separate values
for (const [key, value] of myMap) {
    // console.log(key, ":", value);
}

// Objects are not iterable from forof loop
// const myObj = {
//     color1: "Black",
//     color2: "Yellow"
// }

// for (const [key,value] of myObj) {
//     console.log(key, ":", value);   
// }