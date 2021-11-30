// New keyword in fat arrow funciton

function Person(name) {
    this.name = name;
}

// Person is not a constructor
// var Person = (name) => {
//     this.name = name;
// }

var shakib = new Person('Shakib');