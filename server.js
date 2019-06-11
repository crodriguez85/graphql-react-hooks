const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

// Import Resolvers typeDefs
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// dotenv
require('dotenv').config()

// Mongoose connect
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true })
    .then(() => console.log('DB Connected'))
    .catch(err => console.error(err));

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server listen on ${url}/graphql`)
});
