const express = require('express');
const app = express();

// Middleware for all routes
app.use((req, res, next) => {
    console.log('Global middleware for all routes.');
    next();
});

// Middleware for routes starting with /api
app.use('/api', (req, res, next) => {
    console.log('Middleware for /api routes.');
    next();
});

// Handle all HTTP methods for /example
app.all('/example', (req, res) => {
    res.send('Handling all HTTP methods for /example.');
});

// Route-specific handler
app.get('/example', (req, res) => {
    res.send('GET request to /example.');
});

app.post('/example', (req, res) => {
    res.send('post request to /example.');
});
app.put('/example', (req, res) => {
    res.send('putrequest to /example.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// Key Differences
// Feature	                                   app.use()	                                                             app.all()
// Path Matching	      Prefix matching (matches all routes starting with the path).	       Exact matching (matches only the exact path).
// HTTP Methods	      Matches all HTTP methods.	                                           Matches all HTTP methods.
// Use Case	          General middleware for all routes or sub-applications.	           Specific route handling for all HTTP methods.
// Default Path	      Defaults to / if no path is provided.	                               Requires a specific path.
// Middleware Chaining	  Can chain multiple middleware functions.	                           Typically used for a single route handler.
// When to Use Which?
// Use app.use() when:

// You want to apply middleware to all routes or a group of routes (e.g., /api/*).

// You want to serve static files or mount sub-applications.

// Use app.all() when:

// You want to handle all HTTP methods for a specific route (e.g., /example).

// You want to apply logic to a specific route regardless of the HTTP method.