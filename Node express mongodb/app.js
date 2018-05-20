const express = require('express');
const app = express();

const PORT = 3000;

app.use('/public', express.static('public' ));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
res.send('soon');

});

app.get('/movies/add', (req, res) => {
    res.send('page add filme');
});

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    res.send(`film ${id}`);
});


app.get('/', (req, res) => {
//res.send('Hello Boukh');
res.render('index');
});

app.listen(3000, () => {
    console.log(`port ${PORT}`);
});