const express = require('express');
const path = require('path');

const PORT = 9000;
const app = express();

app.use(express.static(__dirname + '/static'));

app.listen(PORT, () => console.log('Server is listening on ', PORT))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'static', 'about.html'))
})

app.get('/contact-me', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'static', 'contact-me.html'))
})

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'static', '404.html'));
  });