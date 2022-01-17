const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const errorHanlder = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 3030;

app.use(cors({ credentials: true, origin: "http://" }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRouter);
app.use(errorHanlder);
app.listen(port, () => {
  console.log(`running on ${port}`);
});
