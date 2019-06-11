const user = {
    _id: "1",
    name: "Cristian",
    email: "crodriguez85@gmail",
    picture: "http://www.cloudinary.com"
}

module.exports = {
    Query: {
        me: () => user
    }
}