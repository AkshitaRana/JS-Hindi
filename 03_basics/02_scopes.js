// var c = 300
let a = 50

if(true){
    let a = 10 // this can not be printed outside the scope
    const b = 100 // this can not be printed outside the scope
    // var c = 40
    // console.log("Inner: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// func inside func is a part of closure
// function one(){
//     const userName = "Akshita"
//     console.log("Hi I am 1st");
//     function two(){
//         const website = "youtube"
//         console.log(userName);
//     }
//     two()
// }
// one()

if(true){
    const userName = "Akshita"
    if(userName === "Akshita"){
        const website = "Youtube"
        // console.log(userName+website);
    }
    // console.log(website);
}
// console.log(userName);


// *******INTERSECTING*******

console.log(addOne(4)) //It do not give error
function addOne(num){
    return num+1
}


addTwo();//It gives error bcz we are holding value in variable
const addTwo = function(num){
        return num+5
}
