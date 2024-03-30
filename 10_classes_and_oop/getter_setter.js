class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}akshita`
    }

    set password(value){
        // this._password = value.toUpperCase()
        this._password = value
    }
}

const akshita = new User("wyrue@4565", "abc")
console.log(akshita.password);
console.log(akshita.email);