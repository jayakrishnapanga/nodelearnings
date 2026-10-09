// export function add(a,b){

//     console.log(a+b)
// }

// file: math.js
// file: math.js
// Simulate a delay using a Promise
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to add two numbers
export const add = async (a, b) => {
  await delay(2000); // Simulate a 2-second delay
  return a + b;
};

// Function to subtract two numbers
export const subtract = async (a, b) => {
  await delay(2000); // Simulate a 2-second delay
  return a - b;
};