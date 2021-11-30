// destructuring

const user = {
    id: 45,
    name: 'Shakib',
    age: 34,
    education: {
        degree: "Bachelor"
    }
}

// object theke name take ber kore ene arekta variable e assign korte chai jeno onno jaygay use kote pari

// var name = user['name']
const { name, education: {degree: myDegree} } = user // destructuring

console.log(myDegree)



// another uses
console.log('===== Another uses =====')
const user2 = {
    id: 45,
    name: 'Shakib',
    age: 34
}
const { name: title, education: { degree } = {} } = user2
console.log(degree)


// array destructuring
console.log('===== Array destructuring =====')
var numbers = [1, 2, [3, 100, 500], 4, 6]
// var [a, b] = numbers

// get 2 and 6
// var [, a, , , b] = numbers

// get 100 and 500
var [, , [, a, b]] = numbers

console.log(a, b)


// value swapping
console.log('===== value swapping =====')
var p = 1
var q = 2

// the old way
// var temp = a
// a = b
// b = temp

//new way
[q, p] = [p, q]
console.log(p, q)