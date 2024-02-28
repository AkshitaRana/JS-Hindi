const myArr = [1, 2, 3, 4, 5,]
const arr = ['Rose', 'Lotus']
const newArr = new Array(1, 4, 20, 56, 100)

// console.log(myArr[0]);
// console.log(arr[1]);


// *****Array Mthods*****

// myArr.push(9)
// myArr.push(100)
// myArr.pop()

// myArr.unshift(10) //adds values at the beginning of the array
// myArr.shift() //removes value from the beginning of the array

// console.log(myArr.includes(40));
// console.log(myArr.indexOf(4));

// const arrayOne = myArr.join()
// console.log(myArr);
// console.log(arrayOne);
// console.log(typeof(arrayOne));


// ****Silce and Splice****
const myn1 = myArr.slice(0,3)//It just shows the elements of that range in an array
console.log("A ", myn1);

const myn2 = myArr.splice(0,3)//it removes the elements of that range from original array
console.log("B ", myn2);
console.log(myArr);