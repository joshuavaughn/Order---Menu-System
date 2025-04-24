const express = require('express');
const app = express();
const route = require('./routes/index')

const path = require('path'); // Don't forget to require 'path'

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

app.use('/api', route);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); // Correct the path
});

app.listen(3000, () => {
    console.log('listening to port 3000...')
})