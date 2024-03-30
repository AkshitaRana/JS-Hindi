class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`The course is injected by ${this.username}`);
    }
}

const myClass = new Teacher("Akshita", "ske@68", "345")
// myClass.addCourse()

const newClass =new User("Akshu")
newClass.logMe()


console.log(myClass instanceof Teacher);
console.log(myClass instanceof User);