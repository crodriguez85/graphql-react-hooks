const { AuthenticationError } = require('apollo-server');

const user = {
    _id: "1",
    name: "Cristian",
    email: "crodriguez85@gmail",
    picture: "http://www.cloudinary.com"
};

const authenticated = next => (root, args, ctx, info) => {
    if(!ctx.currentUser) {
        throw new AuthenticationError('You must be Logged in')
    }
    return next(root, args, ctx, info)
}

module.exports = {
    Query: {
        me: authenticated((root, args, ctx) => AudioContext.currentUser)
    }
}