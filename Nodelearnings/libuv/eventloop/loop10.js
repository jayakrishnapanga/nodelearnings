
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    Promise.resolve().then(() => {
        console.log('Promise inside Timeout 1');
    });
    process.nextTick(() => {
        console.log('Next Tick inside Timeout 1');
    });
}, 0);

setImmediate(() => {
    console.log('Immediate 1');
    process.nextTick(() => {
        console.log('Next Tick inside Immediate 1');
    });
    Promise.resolve().then(() => {
        console.log('Promise inside Immediate 1');
    });
});

Promise.resolve().then(() => {
    console.log('Promise 1');
});

process.nextTick(() => {
    console.log('Next Tick 1');
});

console.log('End');

// start
// end
// Next Tick 1
// Promise 1
// Timeout 1
// Promise inside Timeout 1
// Next Tick inside Timeout 1
// Immediate 1
// Next Tick inside Immediate 1
// Promise inside Immediate 1