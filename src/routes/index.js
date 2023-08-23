import UserController from "../controllers/UserController.js";
import { Router } from "express";

const routes = Router();

routes.post('/register', UserController.create);
routes.get('/showUser/:id', UserController.show);

export default routes;