userDAO = (connection) => {
    this._connection = connection();
}

userDAO.prototype.insertUser = (user) => {
    this._connection.open((err, mongoclient) => {
        mongoclient.collection("users", (err, collection) => {
            collection.insert(user);

            mongoclient.close();
        });
    });
}

module.exports = () => {
    return userDAO;
}