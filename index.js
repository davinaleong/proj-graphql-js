require('dotenv').config();
const express = require('express');


const env = process.env;


const app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'x-Requested-with,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


require('./routes/routes')(app, env);


app.listen(process.env.SERVER_PORT || 5000, function() {
    console.log(`Welcome to ${env.APP_NAME}!`);
});