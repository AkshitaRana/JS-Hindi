const flowers = ["Lotus", "Lily", "Lavender"]
const fruits = ["Mango", "Orange", "Banana"]

// flowers.push(fruits)
// console.log(flowers);
// console.log(flowers[3][2]);

// const newArr = flowers.concat(fruits)
// console.log(newArr);

// Spread
const newArr = [...flowers, ...fruits]
// console.log(newArr);

//flat
const latestArr = [1, 2, 3, [4, 5], 10, [3, [5, 7]]]
// console.log(latestArr.flat(Infinity));

// console.log(Array.isArray("Akshita"));
// console.log(Array.isArray([1, 3]));
// console.log(Array.from("Akshita"));
// console.log(Array.from({name: "Akshita"})); //Special case. It returns empty array if you don't specify that you have to make array from keys or values

let score1 = 200
let score2 = 300
let score3 = 500
console.log(Array.of(score1, score2, score3));
console.log(Array.of("Akshita", "Cutie", "Smart"));

