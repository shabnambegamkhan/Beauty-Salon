const mongoose = require('mongoose');

// const mongoAtlasUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}/${process.env.MONGODB_NAME}`;

const mongoAtlasUri = process.env.MONGODB_DB_URL;

function initConnection() {
    mongoose.connect(mongoAtlasUri);
    var db = mongoose.connection;
    db.on('error', function (err) {
        console.log('Failed to connect to database');
        console.log(err);
        process.exit(1);
    });

    db.on('connecting', function () {
        console.log('connecting to Mongo DB...');
    });
    db.on('error', function (error) {
        console.error('error in mongo db connection: ' + error);
    });
    db.on('connected', function () {
        console.log('Mongo db connected!');
    });
    db.once('open', function () {
        console.log('DB connection opened.');
    });
    db.on('reconnected', function () {
        console.log('Mongo db reconnected!');
    });
    db.on('disconnected', function () {
        console.error('Mongo db disconnected!');
    });

    return db
};

module.exports = initConnection;