const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.TOKENSECRET;
const refreshTokens = [];

const createToken = (userName, isRefresh) => {
  if (isRefresh) return jwt.sign(userName, secret);
  return jwt.sign({ userName }, secret, { expiresIn: "1h" });
};
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded.userName;
  } catch (error) {
    return false;
  }
};
const generateNewToken = (refreshToken, userName) => {
  const exists = refreshTokens.indexOf(refreshToken);
  if (exists === -1) return false;
  if (userName !== verifyToken(refreshToken)) return false;
  return createToken(userName);
};
const logOut = (refreshToken, userName) => {
  const exists = refreshTokens.indexOf(refreshToken);
  if (exists === -1) return;
  if (userName !== verifyToken(refreshToken)) return;
  refreshTokens.filter((token) => token !== refreshToken);
  return;
};

module.exports = { createToken, verifyToken, generateNewToken, logOut };
