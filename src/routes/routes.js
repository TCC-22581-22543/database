import AnotacaoController from "../controllers/AnotacaoController.js";
import UserController from "../controllers/UserController.js";
import AuthController from "../controllers/AuthController.js";
import EspecieController from "../controllers/EspecieController.js";
import { Router } from "express";


const routes = Router();
import upload from '../config/multer.js';

routes.post("/register", UserController.create);
routes.get("/showUser/:id", UserController.show);
routes.get("/showAllUsers", UserController.returnAllUsers);
routes.put("/updateUser/:id", UserController.update);
routes.delete("/deleteUser/:id", UserController.delete);

routes.post("/login", AuthController.login);

routes.post("/notes", AnotacaoController.create);
routes.get("/readNotes/:id", AnotacaoController.read);
routes.put("/updateNotes/:id", AnotacaoController.update);
routes.delete("/deleteNotes/:id", AnotacaoController.delete);

routes.get("/showAllEspecies", EspecieController.returnAllEspecies);
routes.get("/readEspecies/:id", EspecieController.read);
routes.post("/upload-image/:id", upload.single("file"),EspecieController.updatedPicture);

export default routes;
