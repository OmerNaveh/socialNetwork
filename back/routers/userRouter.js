const express = require("express");
const crypto = require("crypto");
const router = express.Router();
require("dotenv").config();
const secret = process.env.SECRET;
const User = require("../mongo/userSchema");
const { createToken, logOut } = require("../controllers/token");
const passwordhash = (password) => {
  return crypto.createHmac("sha256", secret).update(password).digest("hex");
};
//sign up request
router.post("/", async (req, res, next) => {
  const { first_name, last_name, user_name, password, email } = req.body;
  if (!first_name || !last_name || !user_name || !password || !email)
    return next("missing params");
  const hashPassword = passwordhash(password);
  try {
    await User.insertMany({
      first_name,
      last_name,
      user_name,
      password: hashPassword,
      email,
    });
    res.send("created successffully");
  } catch (error) {
    return next("DB issues");
  }
});
//sign in request
router.put("/", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return next("missing params");
  const hashPassword = passwordhash(password);
  const validUser = await User.findOne({ password: hashPassword, email });
  if (!validUser) return next("unauthorized");
  const accessToken = createToken(validUser.user_name);
  const refreshToken = createToken(validUser.user_name, true);
  res.cookie("accessToken", accessToken);
  res.cookie("refreshToken", refreshToken);
  res.send(validUser.user_name);
});

//log out request
router.delete("/", (req, res, next) => {
  const { refreshToken } = req.cookies;
  const { user_name } = req.body;
  logOut(refreshToken, user_name);
  res.clearCookie("refreshToken");
  res.clearCookie("accessToken");
  res.send("logged Out");
});

module.exports = router;
