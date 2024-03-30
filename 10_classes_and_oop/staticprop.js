class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    // It use to stop the access of the method
    static createID(){
        return `123`
    }
}

const akshita = new User("Akshita")
// console.log(akshita.createID())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@12356")
iphone.logMe()
console.log(iphone.createID())