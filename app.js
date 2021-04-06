const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const { logger } = require('./controllers')
const router = require('./routers/publicRouter.js');

const app = express();
dotenv.config();

if(process.env.LOGGER === 'disable')
    console.log = function() {};

port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/', logger, router);
app.use(express.static(path.join(__dirname,'/storage')));

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});