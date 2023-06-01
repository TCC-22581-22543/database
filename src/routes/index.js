import UserController from "../controllers/UserController.js";
import { Router } from "express";

const routes = Router();

routes.post('/register', UserController.index);

export default routes;