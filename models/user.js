import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
    //it should contain 8-20 alphanumeric letter and be unique, accented letters are allowed
    match: [
      /^[a-zA-Z0-9\u00C0-\u00FF]{8,20}$/,
      "Username must be 8-20 alphanumeric characters",
    ],
  },
  image: {
    type: String,
  },
});


const User = models.User || model('User', UserSchema);

export default User;
