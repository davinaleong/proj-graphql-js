const GraphqlRoutes = (router, env) => {
    
    router.get('/graphql', function(req, res) {
        res.status(200).send(`Welcome to ${env.APP_NAME}'s GraphQL endpoint.`);
    });

}

module.exports = GraphqlRoutes;