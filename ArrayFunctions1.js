// function number() {
//     return 10;
// }

// let number2 = () => 12;

// let number3 = (n) => {
//     console.log(n);
// }

// console.log(number2());
// number3(13);

// let number = (a, b) => {
//     return a + b;
// }
// let number = (a, b) => a + b;
// console.log(number(10, 5));

var javascript = {
    name: 'javascript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function () {
        this.libraries.forEach((a) => {
            console.log(`${this.name} loves ${a}`);
        })
    }
}
javascript.printLibraries();