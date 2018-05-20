const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
res.send('Hello Boukh')
});

app.listen(3000, () => {
    console.log('port 3000');
});