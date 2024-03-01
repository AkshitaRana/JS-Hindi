const user = {
    userName: "Akshita",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName} welcome to the course.`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Akshu"
// user.welcomeMessage()

// console.log(this); //this returns empty value

// 1st way
// function chai(){
//     let userName = "Akshita"
//     console.log(this.userName);
//     console.log(this);
// }

// chai()

// 2nd way
// const chai = function(){
//     console.log(this.userName);
//     console.log(this);
// }

// chai()

const chai =  () => {
        console.log(this.userName);
        console.log(this);
    }

// chai()

// BASIC ARROW FUNCTION (Explicit)
// You have to use return keyword if you use {}
const myFunc = (num1, num2) => {
    return num1+num2
}

// console.log(myFunc(8,10));


// Implicit return arrow function
// You don't have to use return keyword if you use ()
// const func = (num1, num2) => num1+num2

// OR

// const func = (num1, num2) => (num1+num2)

const func = (num1, num2) => ({user: "Akshita"})

console.log(func(3, 4));