const graphqlHttp = require('express-graphql');

const Resolvers = require('./../resolvers/resolvers');
const HelloSchema = require('./../schemas/hello.schema');

const GraphqlRoutes = (app, env) => {
    
    // router.get('/graphql', function(req, res) {
    //     res.status(200).send(`Welcome to ${env.APP_NAME}'s GraphQL endpoint.`);
    // });

    app.use('/graphql', graphqlHttp({
        schema: HelloSchema,
        rootValue: Resolvers,
        graphiql: true
    }));

}

module.exports = GraphqlRoutes;