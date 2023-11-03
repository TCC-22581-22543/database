import AnotacaoController from "../controllers/AnotacaoController.js";
import UserController from "../controllers/UserController.js";
import AuthController from "../controllers/AuthController.js";
import { Router } from "express";
import EspecieController from "../controllers/EspecieController.js";
import auth from "../middlewares/auth.js";

const routes = Router();

routes.post("/register", UserController.create);
routes.get("/showUser/:id", UserController.show);
routes.get("/showAllUsers", UserController.returnAllUsers);
routes.put("/updateUser/:id", UserController.update);
routes.delete("/deleteUser/:id", UserController.delete);

routes.post("/login", AuthController.login);

routes.post("/notes", auth, AnotacaoController.create);
routes.get("/readNotes", auth, AnotacaoController.returnNotes);
routes.put("/updateNotes/:id", AnotacaoController.update);
routes.delete("/deleteNotes/:id", AnotacaoController.delete);

routes.get("/species", EspecieController.showSpecies);

export default routes;
