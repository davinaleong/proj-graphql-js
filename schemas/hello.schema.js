const { buildSchema } = require('graphql');

const HelloSchema = buildSchema(`
    type Query {
        hello: String
    }
`);

module.exports = HelloSchema;