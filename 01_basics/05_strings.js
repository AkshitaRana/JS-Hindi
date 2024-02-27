const name = "Akshita"
const repoCount = 50
// console.log(name+ repoCount+ " value");
// console.log(`My name is ${name} and the repo count is ${repoCount}`);

// Another declaration of string
const gameName = new String("Akshita_boss")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "   Akshita    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://akshita%20rana"
// console.log(url.replace('%20', '-'));
// console.log(url.includes('akshita'));

const newStringTwo = "akshita-r-com"
console.log(newStringTwo.split('-'));