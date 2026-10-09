// process.nextTick and microtasks (promise callbacks) are executed immediately after the current operation completes, even before moving to the next timer or phase.
// This means that after timer1 completes, the process.nextTick and promise callbacks are executed before timer2.


setTimeout(() => {
    console.log('timer1');
    Promise.resolve().then(() => console.log('promise inside timer1'));
    process.nextTick(() => console.log('nextTick inside timer1'));
}, 0);
  
setTimeout(() => {
console.log('timer2');
}, 0);


// Output:
// timer1
// nextTick inside timer1
// promise inside timer1
// timer2



// Microtasks and Macrotasks
// Microtasks: These are tasks with higher priority, executed after the current operation completes and before moving to the next phase of the event loop. Examples:

// Promise callbacks (.then, .catch, .finally).

// process.nextTick (Node.js-specific, higher priority than Promises).

// Macrotasks: These are tasks with lower priority, executed in the event loop phases. Examples:

// setTimeout, setInterval, setImmediate, I/O operations


// Microtasks are executed immediately after the current operation completes, even if they are added during the execution of a macrotask (e.g., setTimeout or setImmediate).

// process.nextTick has higher priority than Promise callbacks.

// The event loop does not proceed to the next macrotask until all microtasks (including newly added ones) are processed.

// Order of Execution:

// Synchronous code.

// Microtasks (process.nextTick, Promise).

// Macrotasks (setTimeout, setImmediate).

// New microtasks added during macrotask execution