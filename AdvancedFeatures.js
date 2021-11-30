// from ES11 we can use globalThis

// globalThis.setTimeout(() => console.log('Hello'), 100)

// window === globalThis // true in browsers
// global = globalThis // true in node js




// let largestNumber = Number.MAX_SAFE_INTEGER
// largestNumber = BigInt(largestNumber) + 1n

// console.log(largestNumber)


// const language = {
//     name: 'Javascript',
//     creator: 'Brendan Eich',
//     Library: {
//         react: {
//             company: 'Facebook'
//         }
//     }
// }

// // let company = language.Library.react.company
// let company = language?.Library?.react?.company
// console.log(company)


// let language
// language = 0
// console.log(language ?? 'Javascript') // Nullish Coalescing Operator
// console.log(language || 'PHP') // Logical OR operator


// promise
// prototype.matchAll

