
// import add from './math.js'
// import { add } from './math.js'
// console.log("i am implementing es6 modules ")
//  let a=10
// let b=20
// add(a,b)

// file: main.js

import { add, subtract } from './math.js';

console.log("This will run immediately, before the module is fully loaded.");

// Use the add function (which has a delay)
add(2, 3).then(result => {
  console.log(`Result of add(2, 3): ${result}`); // This will log after 2 seconds
});

console.log("This will also run immediately, even though the module is still loading.");

// Use the subtract function (which also has a delay)
subtract(5, 2).then(result => {
  console.log(`Result of subtract(5, 2): ${result}`); // This will log after 2 seconds
});