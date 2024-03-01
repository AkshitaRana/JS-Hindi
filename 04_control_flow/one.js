// if
// >, <, <=, >=, ==, !=, ===, !==

// const isUserLoggedIn = true
// const temp = 42

// if (2 === "2"){
//     console.log("Executed");
// }
// console.log("Not Ecexuted");

// if(temp<50){
//     console.log("Temp is less than 50");
// }
// else{
//     console.log("Temp is more than 50");
// }
// console.log("Executed");


const score = 200
if (score>100){
    let power = "fly"
    // console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);


// const balance = 1000
// if (balance>500) console.log("It is 1st"), console.log("It is 2nd ");

// if (score<200){
//     console.log("Score is less than 200");
// }
// else if (score<500){
//     console.log("Score is less than 500");
// }
// else if (score<700){
//     console.log("Score is less than 750");
// }
// else if (score<1000){
//     console.log("Score is less than 1000");
// }
// else{
//     console.log("Score is less than 1200");
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard){
    console.log("Allow to buy product");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow user to login");
}