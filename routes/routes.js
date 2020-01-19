const router = require('express').Router();

const Routes = (app, env) => {

    app.use('/', router);

    require('./web.routes')(router, env);

    require('./graphql.routes')(router, env);

}

module.exports = Routes;