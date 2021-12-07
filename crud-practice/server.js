const express = require('express');

const plants = ['wildflowers', "herbs", 'moss', 'grass', 'corn', 'bush'];

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Plant Store</h1>`)
});

// Special Route
app.get('/wildone', (req, res) => {
    res.send(`
        <h1> I'm a Wild One!</h1>
        <p>${plants[0]}</p>
    `);
});

// Multiple Params
app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params);
    res.send(`Hello ${req.params.firstname}, ${req.params.lastname}`)
});

// Query
app.get('/hey/:firstname', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hey ${req.query.title}, ${req.params.firstname}`)
});

// indexOfPlant is just a place holder /:indexOfPlant
app.get('/:indexOfPlant', (req, res) => {
    // console.log(req);
    res.send(plants[req.params.indexOfPlant])
});




const PORT = 3000;

app.listen(PORT, () => `Listening on port: ${PORT}`);