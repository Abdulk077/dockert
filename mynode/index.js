// create templete for express
const express = require('express'); 

// create express app
const app = express();

// parse incoming JSON request bodies
app.use(express.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Express application."});
});


// listen server on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});