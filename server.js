import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";

import authRouter from "./routes/userAuth.js";
import connectdb from "./utils/db.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

connectdb();

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
