const express = require('express');

const app = express();

//* ===== Setup our Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//* ===== Routes
app.get('/', (req, res) => {
    res.render('Show')
});

const PORT = 3001;

app.listen(PORT,()=> console.log(`Now listening on ${PORT}...`))