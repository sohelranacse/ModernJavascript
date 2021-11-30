// spread operator
var numbers = [1, 2, 3]

// var a = numbers
var a = [...numbers] // exact copy of numbers

// var newNumbers = [numbers[0], numbers[1], numbers[2], 4, 5, 6]
var newNumbers = [...numbers, 4, 5, 6]

numbers.push(4)


console.log(newNumbers)
console.log(a)
console.log(numbers)

// concating
console.log('Concating....')
var n1 = [1, 2, 3]
var n2 = [3, 4, 5]
var num = [...n1, ...n2]
console.log(num)

// use in object
console.log('Use in object....')
var obj1 = {
    x: 1,
    y: 2
}
var obj2 = {
    a: 1,
    b: 2
}
console.log({
    ...obj1,
    ...obj2
})
