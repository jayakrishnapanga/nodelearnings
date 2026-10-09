const express=require("express")
const app=express()


// Using app.route(), you can chain the handlers together:
// Avoids repeating the route path (/users).
// Groups all related handlers for the /users route in one place.
// Makes the code more concise and easier to read.
// Advantages of app.route()
// Code Readability:
// Grouping related handlers together improves code organization and readability.
// Avoids Repetition:
// You don't need to repeat the route path for each HTTP method.
// Logical Grouping:
// Helps logically group handlers for the same route, making the code easier to maintain.

// app.route('/users')
//     .get((req,res)=>{
//         console.log("get list of all users")
//         res.send("i get request executed")
//     })
//     .post((req,res)=>{
//         console.log("create a new user")
//         res.send("i post request executed")
//     })
//     .delete((req,res)=>{
//         console.log("delete the users")
//         res.send("i delete request executed")
//     })
//     .put((req,res)=>{
//         console.log("update the user")
//         res.send("i put request executed")
//     })
// app.get("/users",(req,res)=>{
//      console.log("get list of all users")
//      res.send("i get request executed")
// })
// app.post("/users",(req,res)=>{
//     console.log("create a new user")
//     res.send("i post request executed")
// })
// app.delete("/users",(req,res)=>{
//     console.log("delete the users")
//     res.send("i delete request executed")
// })
// app.put("/users",(req,res)=>{
//     console.log("update the user")
//     res.send("i put request executed")
// })


// using app.all middleware
app.route('/users')
   .all((req, res, next) => {
       console.log('Middleware for all HTTP methods on /users');
       next(); // Pass control to the next handler
   })
   .get((req, res) => {
       res.send('Get a list of users');
   })
   .post((req, res) => {
       res.send('Create a new user');
   });

app.listen(3000,(req,res)=>{
     console.log("hey i am listening at the 3000")
})