//ES6

// class User {
//     constructor(username, email, password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const myClass = new User("Akshita", "aeds@178", 567)
// console.log(myClass.encryptPassword());
// console.log(myClass.changeUserName());


// Behind the scene

function User(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const newClass = new User("Akshu", "aeds@178", 897)
console.log(newClass.encryptPassword());
console.log(newClass.changeUserName());
