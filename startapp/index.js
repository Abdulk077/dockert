const mongoose = require('mongoose');

const DATABASE = "mongodb://localhost:27017/testing";

mongoose
        .connect(DATABASE)
        .then(() => {
            console.log('DB Connected');
        })
        .catch((err) => {
            console.log(err);
        });