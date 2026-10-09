const { start } = require("repl");

console.log('Start');

process.nextTick(() => {
    console.log('Next Tick 1');
    process.nextTick(() => {
        console.log('Next Tick 2');
    });
});

Promise.resolve().then(() => {
    console.log('Promise 1');
}).then(() => {
    console.log('Promise 2');
});

console.log('End');



// start
// end
// Next Tick 1
// Next Tick 2
// Promise 1
// Promise 2