setTimeout(() => {
    console.log('Timeout 1');
    setImmediate(() => {
        console.log('Immediate inside Timeout 1');
    });
}, 0);

setImmediate(() => {
    console.log('Immediate 1');
    setTimeout(() => {
        console.log('Timeout inside Immediate 1');
    }, 0);
});

// Timeout 1
// Immediate 1
// Immediate inside Timeout 1
// Timeout inside Immediate 1

