var age = 18;

// old rules
// var type;
// if (age >= 18) {
//     type = "adult";
// } else if (age < 10) {
//     type = "child";
// } else {
//     type = "young";
// }

var type = age >= 18 ? "adult" : age < 10 ? "child" : "young"

console.log(type);