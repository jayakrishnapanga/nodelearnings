

// Exceptional Behavior in Timer Phase
// In the timer phase:

// Normally, the event loop executes all timer callbacks in the queue before moving on to the next phase.
// Exception: If a timer callback generates microtasks, these microtasks are executed immediately before moving to the next timer callback.




console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    process.nextTick(() => {
        console.log('Next Tick inside Timeout 1');
    });
    Promise.resolve().then(() => {
        console.log('Promise inside Timeout 1');
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
    setTimeout(() => {
        console.log('Timeout inside Promise 1');
    }, 0);
});

process.nextTick(() => {
    console.log('Next Tick 1');
});

console.log('End');



// start 
// end
// Next Tick 1
// Promise 1
// Timeout1
// Timeout inside Promise 1
// Next Tick inside Timeout 1
// Promise inside Timeout 1