// Important of object methods

var x = 9
var y = 20
var z = x * y

const myObj = {
    name: 'Javascript',
    estd: '1995',
    founder: 'Brendan Eich',
    ranking: 1,
    x,
    y,
    z
}

var keys = Object.keys(myObj) // get all keys
var values = Object.values(myObj) // get all values
var entries = Object.entries(myObj) // get full arrays

console.log(entries)