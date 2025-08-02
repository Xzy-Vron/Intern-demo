import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { referalCode, name } from "./data/data.js";
import { random } from "./data/random.js";
import dotenv from "dotenv";


dotenv.config()

const app = express();


app.use(cors({
  origin: `process.env.FRONTEND_BASE`,
  credentials: true
}));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());




app.get("/", (req, res) => {
  const user = name[random(name)];
  const code = referalCode[random(referalCode)];
  const randomNumber = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

  res.status(200).json({
    user,
    code,
    randomNumber
  })
});



app.listen(3000, () => console.log(`Server running on 3000`));


