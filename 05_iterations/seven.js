const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumbers.map((num)=>num+10)
// console.log(newNumbers);


// Chaining(using more than 1 methods in a row)
const newNum = myNumbers
            .map( (num) => num*10)
            .map( (num) => num+1)
            .filter( (num) => num>40)
console.log(newNum);