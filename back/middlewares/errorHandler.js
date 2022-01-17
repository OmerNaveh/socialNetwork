const bank = [
  { msg: "missing params", code: 400 },
  { msg: "internal server errors", code: 500 },
  { msg: "wrong credentials", code: 400 },
  { msg: "DB issues", code: 500 },
  { msg: "username already exists", code: 401 },
  { msg: "Not Found!", code: 404 },
  { msg: "invalid token", code: 401 },
  { msg: "unauthorized", code: 401 },
];
const errorHandler = (error, req, res, next) => {
  const { msg, code } = bank.filter(({ msg }) => msg === error)[0];
  if (!msg) return res.status(500).send("something went wrong!");
  res.status(code).send(msg);
};

module.exports = errorHandler;
