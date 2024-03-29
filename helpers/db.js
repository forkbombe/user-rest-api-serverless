const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = async() => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }
    console.log('=> using new database connection');
    return await mongoose.connect(process.env.DB)
        .then(db => {
            isConnected = db.connections[0].readyState;
        });
};