// Immediately invoked function expression (IIFE) => ()()

(function myFunc(){
    //named IIFE
    console.log("DB CONNECTED");
})();

( (name) => {
    //Unnamed IIFE
    console.log(`Database is connected ${name}`);
})("Akshita")