// imports/exports

// import {pi as varPi, a as varA} from "./External.js" // named import
// import * as test from "./External.js"

// console.log(varPi, varA)

// console.log(test.a)

import myFunc, {pi, a} from "./External.js"

console.log(a, pi)

myFunc()