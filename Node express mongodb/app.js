const express = require('express');
const app = express();

const PORT = 3000;

app.get('/movie', (req, res) => {
res.send('soon');
});

app.get('/movie/:id', (req,res) => {
    const id = req.params.id;
    res.send(`film ${id}`);
})

app.get('/', (req, res) => {
res.send('Hello Boukh');
});

app.listen(3000, () => {
    console.log(`port ${PORT}`);
});