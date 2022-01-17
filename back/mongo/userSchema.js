const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE).then(console.log("Connected to DB..."));

const UserSchema = mongoose.Schema({
  user_name: String,
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  friends_list: { type: [String], default: [] },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
