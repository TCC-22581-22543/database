// config inicial
import express, { urlencoded, json } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import routes from "./routes/routes.js";
import cors from "cors";

const app = express();
app.use(cors({}));
dotenv.config();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(routes);

// rota inicial
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    app.listen(3333, () => {
      console.log("Server started!");
    });
  })
  .catch((err) => console.log(err));
