const arr = ['lily', 'jasmine', 'lotus', 'rose', 'tulip', 'lavender']

// arr.forEach( function (item){
//     console.log(item);
// })

// arr.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

// arr.forEach(printMe)

// arr.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// }  )


const myCoding = [
    {
        languageName : "Javascript",
        extension : 'js'
    },
    {
        languageName : "Python",
        extension : 'py'
    },
    {
        languageName : "C++",
        extension : 'cpp'
    },
]

myCoding.forEach( (item) => {
    console.log(item.extension);
})