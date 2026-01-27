import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectdb } from "./utils/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectdb();

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
