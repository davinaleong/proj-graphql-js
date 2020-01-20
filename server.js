require('dotenv').config();
const express = require('express');


const env = process.env;
const serverPort = env.SERVER_PORT || 3000;


const app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'x-Requested-with,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


require('./routes/routes')(app, env);


app.listen(serverPort, function() {
    console.log(`${env.APP_NAME} listening on port ${serverPort}`);
});