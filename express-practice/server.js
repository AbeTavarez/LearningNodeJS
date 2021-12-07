// Require Modules
const express = require('express');

// Create our Express app;
const app = express();

// Configure the app (app.set)


// Mount Middleware (app.use)

// Define our root route directly on app
app.get('/', (req, res) => {
    res.send(`<h1> Hello NodeJS && Express!!!</h1>`);
});

// Tell the app to start listening for request on port 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));