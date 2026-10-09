const express = require('express');
const app = express();
const port = 3000;


// case1 above the behaviour for /hello, /jk , /anything here try once
app.use("/",(req,res,next)=>{
  console.log("execute / route ")
  next()
  // res.send("/ route")
})

app.use("/hello/jk",(req,res,next)=>{
    console.log("middleware cehck 1 happen ")
    res.send("i tokk")
})

app.use("/jk",(req,res,next)=>{
  console.log("middeleware2");
  res.send("I AM EXPRESS helooo");
  // next()
})



// case2 above the behaviour for /hello, /jk , /anything here try once
// app.use("/hello",(req,res,next)=>{
//     console.log("middleware cehck 1 happen ")
//     res.send("i tokk")
// })
// app.use("/jk",(req,res,next)=>{
//   console.log("middeleware2");
//   res.send("I AM EXPRESS helooo");
//   // next()
// })
// app.use("/",(req,res,next)=>{
//   console.log("middleware cehck 1 happen ")
//   res.send("i tokk")
// })

// case3 above the behaviour for /hello, "/hello/good" , /hello/anything   here try once
// app.get("/heloo",(req,res)=>{
//   console.log("i am express");
//   res.send("I AM EXPRESS helooo to");
// })
// app.use("/hello/good",(req,res,next)=>{
//   console.log("middleware3");
//   res.send("I AM EXPRESS helooo");
//   next()
// })


// case4 above the behaviour for /hello, "/hello/good" , /hello/anything   here try once
// app.use("/hello/good",(req,res,next)=>{
//   console.log("middleware3");
//   res.send("I AM EXPRESS helooo");
//   next()
// })

// app.get("/heloo",(req,res)=>{
//   console.log("i am express");
//   res.send("I AM EXPRESS helooo to");
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});