import AnotacaoController from "../controllers/AnotacaoController.js";
import UserController from "../controllers/UserController.js";
import { Router } from "express";

const routes = Router();

routes.post('/register', UserController.create);
routes.get('/showUser/:id', UserController.show);
routes.put('/updateUser/:id', UserController.update);
routes.delete('/deleteUser/:id', UserController.delete);

routes.post('/notes', AnotacaoController.create);
routes.get('/readNotes/:id', AnotacaoController.read);
routes.put('/updateNotes/:id', AnotacaoController.update);
routes.delete('/deleteNotes/:id', AnotacaoController.delete);

export default routes;