let myArr = ["thor", "Spiderman"]

let myObj = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.akshita = function(){
    console.log(`Akshita is present in all objects.`);
}

Array.prototype.hiakshita = function(){
    console.log(`Akshita is saying hello`);
}

// myObj.akshita()
// myArr.akshita()
// myArr.hiakshita()
// myObj.hiakshita()



// INHERITENCE

// Old syntax
const user = {
    userName: "Example",
    email: "ex@1235"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


// Modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUser = "Hello     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUser.trueLength()
"Akshita".trueLength()
"MangoShake".trueLength()
