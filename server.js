const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRouter = require("./routes/userAuth"); // 👈 require, NOT import
const connectdb = require("./utils/db");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

connectdb();

app.listen(process.env.PORT || 7000, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
