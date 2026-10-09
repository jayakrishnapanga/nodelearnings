Promise.resolve()
  .then(() => console.log("First"))
  .then(() => console.log("Second"));

Promise.resolve()
  .then(() => console.log("Third"))
  .then(() => console.log("Fourth"));