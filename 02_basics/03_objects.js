//Object literals (no singlton)

const mySymbol = Symbol("key1")
const user = {
    name: "Akshita",
    "full name": "Akshita Rana",
    [mySymbol]: "My Symbol",
    age: 70,
    email: "yxs@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(user.email)
// console.log(user["full name"]);
// console.log(user[mySymbol]);

user.email = "awd@gmail.com"
// console.log(user["email"]);
// Object.freeze(user) // It doest allow to make any changes on the elements in the object
user.email = "awxxx@gmail.com"
// console.log(user);

user.greetings = function(){
    console.log("Hello JS User");
}

user.anotherGreetings = function(){
    console.log(`Hello ${this.name} the User.`);
}

console.log(user.greetings());

console.log(user.anotherGreetings());

