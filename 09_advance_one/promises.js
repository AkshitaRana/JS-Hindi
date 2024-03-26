// Create and consume promises
// 1st way
// const promiseOne = new Promise(function(resolve, reject){
    // DB calls
    // Crypto
    // Network call
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// 2nd way
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 is completed");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("Promise 2 consumed");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name:"Akshita", email:"example@1.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



const promiseFour = new Promise(function(resolve, reject){
    const error = true
    if(!error){
        resolve({username:"Akshita", email:"qaz@1.com"})
    }
    else{
        reject('ERROR: Something went wrong')
    }
},1000)


promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected."))


const promiseFive = new Promise(function(resolve, reject){
    let error = true
    if(!error){
        resolve({username:"javascript", email:"qaz@1.com"})
    }
    else{
        reject('ERROR: JS went wrong')
    }
},1000)


async function consumePromiseFive(){
    try {
        const five = await promiseFive
        console.log(five);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// getAllUsers()


fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error) )
