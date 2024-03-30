const User = {
    _email : "ejxjn@68",
    _password : "3sjs" ,

    get email(){
        return this._email.toUpperCase()
    },


    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);