const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const { logger,  _controllerTest } = require('./controllers')
const { isLoginHandler, authenticateToken } = require('./middlewares')
const privateRouter = require('./routers/privateRouter');
const publicRouter = require('./routers/publicRouter');

const app = express();
dotenv.config();

if(process.env.LOGINFO === 'disable')
    console.info = function() {};

port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//publice route
app.use(logger);
app.use(publicRouter);

// private route 
// app.use(authenticateToken);
app.use(privateRouter);
app.use(express.static(path.join(__dirname,'/storage')));

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});