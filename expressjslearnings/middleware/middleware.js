const express = require('express');
const app = express();
console.log(require("../Routes/user.js"))
const {userRoutes}=require("../Routes/user.js");
const { authRoutes } = require('../Routes/auth.js');

// Middleware 1 - Logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    // res.send("i am not passing control to next middleware")
    next(); // Pass control to the next middleware/route
});

app.use("/user",userRoutes)
app.use("/auth",authRoutes)

// Middleware 2 - JSON Parser
// app.use(express.json());

// Route 1
app.get('/hello', (req, res) => {
    res.send('Hello, World! from middleware');
});
app.get('/hello/2', (req, res) => {
    res.send('Hello, World! from middleware2');
});

// Route 2
// app.post('/data', (req, res) => {
//     res.json({ message: 'Data received', data: req.body });
// });

// // 404 Middleware (Should be last)
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start Server
app.listen(3000, () => console.log('Server running on port 3000 it is from middleware.js file'));
