function setUserName(username){
    // Complex DB calls
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username)  //To hold the reference of the function
    this.email = email
    this.password = password
}

const js = new createUser("Akshita", "aks@", "2345")
console.log(js);