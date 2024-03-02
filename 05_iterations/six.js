// const arr = ['lily', 'jasmine', 'lotus', 'rose', 'tulip', 'lavender']


// Foreach doesn't return anything through below statement
// const val = arr.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(val);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = myNum.filter( (num) => num>4)
// console.log(newNum);
// or
// const newNum = myNum.filter( (num) => {
//     return num>4
// })
// console.log(newNum);
// if you start "scope" {} then you have to use "return" keyword


// const newNum = []
// myNum.forEach(  (num) => {
//     if (num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);

const books = [
    {title: "Book1", genre: "fiction", publish: 2000, edition: 2015},
    {title: "Book2", genre: "non-fiction", publish: 1995, edition: 2016},
    {title: "Book3", genre: "history", publish: 1999, edition: 2014},
    {title: "Book4", genre: "science", publish: 1966, edition: 2010},
    {title: "Book5", genre: "history", publish: 1923, edition: 2012},
    {title: "Book6", genre: "non-fiction", publish: 2001, edition: 2005},
    {title: "Book7", genre: "fiction", publish: 2000, edition: 2015},
    {title: "Book8", genre: "science", publish: 1945, edition: 2016},
    {title: "Book9", genre: "history", publish: 2007, edition: 2018},
    {title: "Book10", genre: "fiction", publish: 2005, edition: 2010}
]

// let userBook = books.filter( (item) => item.genre === "fiction")
// console.log(userBook);

let userBook = books.filter( (item) => item.genre === "fiction" && item.publish>=1995)
console.log(userBook);