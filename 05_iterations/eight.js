const myNums = [1, 2, 3]

// const total = myNums.reduce(function(accumulator, current_value){
//     console.log(`Accu: ${accumulator} and CuValue: ${current_value}`);
//     return accumulator + current_value
// },0)

// console.log(total);

// or

// const total = myNums.reduce( (acc, curValue) => acc+curValue, 0)
// console.log(total);


const shoppingCart = [
    {
        courseName : "JS",
        price: 999
    },
    {
        courseName : "Python",
        price: 1499
    },
    {
        courseName : "C++",
        price: 1699
    },
    {
        courseName : "Data Science ",
        price: 12000
    },
    {
        courseName : "AI",
        price: 10000
    }
]

const total = shoppingCart.reduce( (acc,course) => acc + course.price,0)
console.log(total);