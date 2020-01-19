require('dotenv').config();
const express = require('express');


const env = process.env;


const app = express();
require('./routes/web.routes')(app, env);


app.listen(env.SERVER_PORT, function() {
    console.log(`${env.APP_NAME} listening on port ${env.SERVER_PORT}`);
});