const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const upload = multer();

const PORT = 3000;

let frenchMovies = [];

app.use('/public', express.static('public' ));
app.use(bodyParser.urlencoded({ extended:false}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
    const title = 'french movies';

  frenchMovies = [
      {title: 'helle1', year: 2016},
      {title: 'helle2', year: 2017},
      {title: 'helle3', year: 2018}
    ];
  res.render('movies', {movies: frenchMovies, title:title});

});

app.post('/movies', (req, res) => {
  
  let newFilm = {title: req.body.movietitle, year: req.body.movieyear};
  frenchMovies.push(newFilm);
  res.sendStatus(201);
  console.log(frenchMovies);
});

app.get('/movies/add', (req, res) => {
    res.send('page add filme');
});

app.get('/movies/:id/:title', (req, res) => {
    const id = req.params.id;
    const title = req.params.title;
    res.render('movie-details', {movieid: id, movietitle: title});

});


app.get('/', (req, res) => {
res.render('index');
});

app.listen(3000, () => {
    console.log(`port ${PORT}`);
});