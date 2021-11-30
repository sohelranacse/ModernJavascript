// for loop, for in, for of

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// foor loop
/*
let i = 0;
for (; ; i++) {
    if (i < 10)
        console.log(i)
    else
        break
}
*/

// for in
/*
const myObj = {
    name: 'Javascript',
    estd: '1995',
    founder: 'Brendan Eich'
}
// console.log(myObj)
for (property in myObj) {
    console.log(property)
    console.log(myObj[property])
}
*/

// for of
/*
const myArray = [1, 2, 3, 4, 5]
for (element of myArray) {
    console.log(element)
}
*/

const myString = 'I love javascript'
for (element of myString) {
    console.log(element)
}