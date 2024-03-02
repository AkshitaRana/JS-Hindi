// for in loop is applicable for objects (this basically gives key if we use "key" keyword inside the loop)

const myObj = {
    js :"Javascript",
    cpp : "C++",
    rb : "ruby",
    swift: "swift ny apple"
}

// for (const key in myObj) {
//     console.log(key);
// }

// for (const key in myObj) {
//         console.log(myObj[key]);
//     }

const arr = ['js', 'cpp', 'java', 'c', 'python']

for (const key in arr) {
    // console.log(`key is ${key} : value is ${arr[key]}`);
}


// Map don't give any output with forin loop because it is non-iterable
const myMap = new Map()
myMap.set('IN', "India")
myMap.set('USA', 'United States of America')
myMap.set('FR', 'France')
myMap.set('IN', "India")

for (const key in myMap) {
    console.log(key);
}