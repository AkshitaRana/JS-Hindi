// function myName(){
//     console.log("Akshita Rana");
// }
// myName()


// function addTwoNumber(num1, num2){
//     console.log(num1+num2);
// }

// addTwoNumber(10,20)


function addTwoNumber(num1, num2){
    return(num1+num2);
    console.log("Akshita");
}

const result = addTwoNumber(5, 10)
// console.log(result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter the value");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Akshita"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...value){
    return value
}
// console.log(calculateCartPrice(100, 200, 300));


user={
    name:"Akshita",
    price: 199
}
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.name} and price is ${anyObject.price}` );
// }

// handleObject(user)
// handleObject({
//     name: "Akshita",
//     price: 599
// })


const myArry = [10, 20, 30]

function handleArray(getArray){
    return getArray[1]
}
// console.log(handleArray(myArry));
console.log(handleArray([10, 40, 50]));