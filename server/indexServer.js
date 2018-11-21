const express = require('express');

const server = express();

server.set('view engine', 'ejs'); // configuring express to work with ejs

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/about', (req, res) => {
    res.render('about');
});

server.listen(4242, () => {
    console.log('Express server is running...')
});