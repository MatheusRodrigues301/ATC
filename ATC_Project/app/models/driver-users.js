driverUserDAO = (connection) => {
    this._connection = connection();
}

driverUserDAO.prototype.insertDriverUser = (driverUser) => {
    this._connection.open((err, mongoclient) => {
        mongoclient.collection("driver-users", (err, collection) => {
            collection.insert(driverUser);

            mongoclient.close();
        });
    });
}

module.exports = () => {
    return driverUserDAO;
}