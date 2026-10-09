// file: main.js
const math = require('./math.js'); // Synchronous load

console.log("This will run only after the module is fully loaded.");

// Use the add function (which has a blocking delay)
const resultAdd = math.add(2, 3);
console.log(`Result of add(2, 3): ${resultAdd}`); // This will log after 2 seconds

console.log("This will run after the add function completes.");

// Use the subtract function (which also has a blocking delay)
const resultSubtract = math.subtract(5, 2);
console.log(`Result of subtract(5, 2): ${resultSubtract}`); // This will log after another 2 seconds