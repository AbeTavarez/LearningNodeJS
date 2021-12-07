const express = require("express");

const app = express();

const tvShows = [
  {
    title: "silicon valley",
    year: 2010,
  },
  {
    title: "Mr Robot",
    year: 2012,
  },
  {
    title: "The Office",
    year: 2005,
  },
];

app.get("/tvshows", (req, res) => {
  res.send(tvShows);
});

app.get("/tvshows/:indexOfTVshowsArray", (req, res) => {
  res.send(tvShows[req.params.indexOfTVshowsArray]);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
