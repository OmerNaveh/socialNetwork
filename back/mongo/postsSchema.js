const mongoose = require("mongoose");
const PostsSchema = mongoose.Schema({
  title: String,
  content: String,
  author: String,
  likes: { type: Number, default: 0 },
  timeCreated: { type: Date, default: Date.now() },
});

const Post = mongoose.model("post", PostsSchema);
module.exports = Post;
