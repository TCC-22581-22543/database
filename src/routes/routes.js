import AnotacaoController from "../controllers/AnotacaoController.js";
import UserController from "../controllers/UserController.js";
import AuthController from "../controllers/AuthController.js";
import EspecieController from "../controllers/EspecieController.js";
import { Router } from "express";
import auth from "../middlewares/auth.js";

const routes = Router();
import upload from "../config/multer.js";

routes.post("/register", UserController.create);
routes.get("/showUser/:id", UserController.show);
routes.get("/showAllUsers", UserController.returnAllUsers);
routes.put("/updateUser/:id", UserController.update);
routes.delete("/deleteUser/:id", UserController.delete);

routes.post("/login", AuthController.login);

routes.post("/notes", auth, AnotacaoController.create);
routes.get("/readNotes/:id", auth, AnotacaoController.returnNotes);
routes.get("/returnNotesById/:id", auth, AnotacaoController.returnNotesById);
routes.put("/updateNotes/:id", auth, AnotacaoController.update);
routes.delete("/deleteNotes/:id", AnotacaoController.delete);

export default routes;
