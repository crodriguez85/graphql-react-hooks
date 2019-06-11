const { ApolloServer } = require('apollo-server');

// Import Resolvers typeDefs
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server listen on ${url}/graphql`)
});
