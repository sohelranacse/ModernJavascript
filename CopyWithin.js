// copyWithin(target, start, end)

// target is required
// start default to 0
// end default to array.length
// never changes array.length
// overwrites original array
// returns modified array

let a = ['Javascript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST']

a.copyWithin(3, 1, 2)
console.log(a)