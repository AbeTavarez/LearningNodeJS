import express from 'express';

const app = express();


const PORT = 3001;

app.listen(()=> console.log(`Now listen on ${PORT}...`))