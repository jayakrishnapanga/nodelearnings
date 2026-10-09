

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

process.nextTick(() => {
    console.log('Next Tick 1');
    setTimeout(() => {
        console.log('Timeout 2');
    }, 0);
});

Promise.resolve().then(() => {
    console.log('Promise 1');
    process.nextTick(() => {
        console.log('Next Tick 2');
        Promise.resolve("promise 2").then(console.log)
    });
});

console.log('End');


// End
// Next Tick 1
// Promise 1
// Next Tick 2
// Timeout 1
// Timeout 2
// promise inner nexttick
