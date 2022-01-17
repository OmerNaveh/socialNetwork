const { verifyToken, generateNewToken } = require("../controllers/token");
const checkCookies = (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;
  if (!refreshToken) return next("invalid token"); //no refresh token - cant enter
  const tokenRes = verifyToken(accessToken); // returns username or false
  if (!tokenRes) {
    const newAccessToken = generateNewToken(refreshToken, tokenRes); //try to create new access token
    if (newAccessToken) {
      res.cookie("accessToken", newAccessToken); //send newly created access token
      return next(); //continue to request
    }
    return next("unauthorized"); //invalid refresh token so thrown
  }
  return next(); //access token was authorized user may continue
};
module.exports = checkCookies;
