// config inicial
import express, { urlencoded, json } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import routes from "./routes/routes.js";
import cors from "cors";
import userRoutes from "seuCaminho/UserRoutes"; // Certifique-se de ajustar o caminho para suas rotas de usuário
import passwordResetRoutes from "seuCaminho/passwordReset"; // Certifique-se de ajustar o caminho para as rotas de recuperação de senha

const app = express();
app.use(cors());
dotenv.config();

app.use("/users");
app.use("/password-reset", passwordResetRoutes);

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(routes);

// rota inicial
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server started!");
    });
  })
  .catch((err) => console.log(err));
