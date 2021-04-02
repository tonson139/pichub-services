const express = require('express');
const path = require('path');

const router = require('./routers/publicRouter.js');
const app = express();

port = process.env.PORT || 3000;
//Body parser Middleware for HTTP body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use(express.static(path.join(__dirname,'/storage')));

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});