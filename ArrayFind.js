// Array.prototype.find()
/*
var numbers = [1, 2, 3, 4, 5, 6, 10];

var result = numbers.find(function (currentValue, currentIndex, arr) {
    return currentValue > 4;
}, this);

console.log(result);
*/

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    test() {
        console.log("hello");
    }
    exampleFunction() {
        let array = [1, 2, 3];
        // array.find(function () {
        //     this.test();
        // }, this);
        array.find( () => {
            this.test();
        });
    }
}

let student = new Student("Sohel", "25");
student.exampleFunction();