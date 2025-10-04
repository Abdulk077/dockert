import express from 'express';

import dotenv from 'dotenv';
import User from './db/user.model.js';
import connect from './db/connect.js';

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`); 
  connect();
 
}); 