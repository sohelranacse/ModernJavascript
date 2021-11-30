// Array.prototype.findIndex()
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.findIndex((currentValue, currentIndex, arr) => {
    return currentValue > 6;
});

console.log(result);