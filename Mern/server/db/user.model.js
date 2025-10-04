// create a task model
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;