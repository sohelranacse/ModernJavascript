class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        console.log(`Person is eathing`)
    }
    sleep() {
        console.log(`Person is sleeping`)
    }
    play() {
        console.log(`Person is playing`)
    }
}

const sakib = new Person('Shakib', 33)
const tamim = new Person('Tamim', 34)
sakib.play()