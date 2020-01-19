const router = require('express').Router();

const WebRoutes = (app, env) => {

    app.use('/', router);
    
    router.get('/', function(req, res) {
        res.status(200).send(`Welcome to ${env.APP_NAME}`);
    });

}

module.exports = WebRoutes;