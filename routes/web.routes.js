const WebRoutes = (router, env) => {

    router.get('/', function(req, res) {
        res.status(200).send(`Welcome to ${env.APP_NAME}.`);
    });

}

module.exports = WebRoutes;