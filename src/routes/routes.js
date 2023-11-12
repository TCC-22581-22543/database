import AnotacaoController from "../controllers/AnotacaoController.js";
import UserController from "../controllers/UserController.js";
import AuthController from "../controllers/AuthController.js";
import EspecieController from "../controllers/EspecieController.js";
import { Router } from "express";
import express from "express";
import auth from "../middlewares/auth.js";
import path from "path";


const routes = Router();
import upload from "../config/multer.js";

const __filename = new URL(import.meta.url).pathname;
const dirname = path.dirname(__filename);

routes.use('/uploads/especies', express.static(path.join(dirname, 'uploads/especies')));


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

routes.get("/species", EspecieController.returnAllEspecies);
routes.get("/readEspecies/:id", EspecieController.read);
export default routes;
