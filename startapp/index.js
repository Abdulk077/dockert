const mongoose = require('mongoose');

const DATABASE = "mongodb://mymongo:27017/testing";
const express = require('express');
const app = express();
mongoose
        .connect(DATABASE)
        .then(() => {
            console.log('DB Connected');
        })
        .catch((err) => {
            console.log(err);
        });
app.get('/', (req, res) => {
    res.json({
        message: 'You are now in root'
    
    })
});

app.listen(3000, () => console.log('Server is running on port 3000'));