// const user = {
//     userName : "Akshita",
//     loggedIn : true,
//     signedIn : 8,

    // getUserDetails : function(){
        // console.log("Get all user details from database.");
        // console.log(`Username: ${this.userName}`);
        // console.log(this);
//     }
// }

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);


function user(username, loggedin, logincount) {
    this.username = username;
    this.loggedin = loggedin;
    this.logincount = logincount;

    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
    }

    this.return
}

const userOne = new user('Akshita', 14, true) 
const userTwo = new user('Aksh', 19, false)
// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.constructor);
console.log(loggedin instanceof user);

