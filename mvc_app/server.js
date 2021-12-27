
const express = require('express');
const tvshowsArray = require('./models/data');

const app = express();

//* ===== Setup our Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//* ===== Middlewares

app.use((req, res, next)=> {
    console.log(`Running middleware...`);
    next()
})

app.use(express.urlencoded({extended:false}));

// app.use(express.json());
//* ============================= Routes

// * @ New Show Form Route
app.get('/tvshows/new', (req, res) => {
    res.render('NewShow')
});

app.get('/tvshows/:indexOfShowArray', (req, res) => {
    res.render('Show', {
        tvshow: tvshowsArray[req.params.indexOfShowArray],
        
    });
});

app.get('/tvshows', (req, res) => {
    res.render('Index', {tvshows: tvshowsArray})
});

app.get('/', (req, res) => {
    res.render('Show', {url: req.url})
});

app.post('/tvshows', (req, res) => {
    // console.log(req.body);

    if (req.body.isFavorite === 'on') {// checks if radio button is on
        req.body.isFavorite = true;
    } else {
        req.body.isFavorite = false;
    };

    tvshowsArray.push(req.body)
    // tvshowsArray.push(JSON.parse(JSON.stringify(req.body)));
    console.log(tvshowsArray);
    // res.send(`data received`);

    res.redirect('/tvshows')
})

const PORT = 3001;

app.listen(PORT,()=> console.log(`Now listening on ${PORT}...`))