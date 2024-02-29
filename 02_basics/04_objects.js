//Object constructor(singelton)

const tinderUser = new Object()
tinderUser.id = 1234
tinderUser.name = "Pam"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const newObject = {
    fullName:{
        userFullName:{
            firstName: "Akshita",
            lastName: "Rana"
        }
    }
}
// console.log(newObject.fullName.userFullName)

//Concating various objects

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
const obj3 = {5:'a', 3:'b'}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// method-1
// const finalObj = Object.assign({}, obj1, obj2, obj3)
// console.log(finalObj);

// method-2(spread)
const finalObj = {...obj1, ...obj2, ...obj3}
// console.log(finalObj);


//How to access objects in array 
// const user = [
//     {
//         name: "Akshita",
//         email:"abs@gmail.com"
//     },

//     {
//         name: "Bhakshu",
//         email:"aausjs@gmail.com"
//     }
// ]
// console.log(user[1].name);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Destructuring 
const course = {
    courseName: "Javascript",
    price: 1000,
    creatorName: "Akshita"
}

// const {creatorName} = course
// console.log(creatorName);

// const {creatorName:Name} = course
// console.log(Name);


// (JSON/API)
// {
//     "courseName": "Javascript",
//     "price": 1000,
//     "creatorName": "Akshita"
// }

// (JSON/API's format)
// [
//     {},
//     {},
//     {}
// ]

