// Set & weakSet
function log(anything) {
    return console.log(anything)
}

// Sets
// let myArray = [] // literal syntax
// let myArray = new Array() // constractor syntax

// let mySet = new Set()

// mySet.add(5).add('Bangladesh')

// mySet.delete('Bangladesh')
// log(mySet.has('Bangladesh'))

// mySet.clear()
// log(mySet.size)

// log(mySet)



// Array to Set
// let myArray = [1, 2, 3]
// let mySet = new Set(myArray)
// // let mySet = new Set('Bangladesh')

// for (let value of mySet) {
//     log(value)
// }



// Set to Array
// let myArray = [1, 2, 3]
// let mySet = new Set(myArray)
// log([...mySet])
// log(Array.from(mySet))



// Set uses
let myArray = [1, 2, 3]
let mySet = new Set(myArray)
mySet.add(4).add(2)
log(mySet)