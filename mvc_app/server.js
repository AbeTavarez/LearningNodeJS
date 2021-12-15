const express = require('express');
const tvshows = require('./models/data');

const app = express();

//* ===== Setup our Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//* ===== Middlewares
app.use(express.urlencoded({extended:false}));

app.use((req, res, next)=> {
    console.log(`Running middleware...`);
    next()
})

//* ===== Routes

// * @ New Show Form Route
app.get('/tvshows/new', (req, res) => {
    res.render('NewShow')
});

app.get('/tvshows/:indexOfShowArray', (req, res) => {
    res.render('Show', {
        tvshow: tvshows[req.params.indexOfShowArray],
        
    });
});

app.get('/tvshows', (req, res) => {
    res.render('Index', {tvshows: tvshows})
});

app.get('/', (req, res) => {
    res.render('Show', {url: req.url})
});

app.post('/tvshows', (req, res) => {
    console.log(req.body);
    res.send(`data received`)
})

const PORT = 3001;

app.listen(PORT,()=> console.log(`Now listening on ${PORT}...`))