import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// create a connection to our MongoDB database

function connect() {
  mongoose
    .connect(process.env.DB_URL )
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("database connection failed. exiting now...");
      console.error(err);
      process.exit(1);
    });
}

export default  connect;