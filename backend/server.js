const express = require ('express');
const app = express();

// require('dotenv').config();

const route = require ('./routes/index')

app.use(express.json());

app.use ('/api', route);

app.listen(3000, () => {
    console.log('listening to port 3000...')
})