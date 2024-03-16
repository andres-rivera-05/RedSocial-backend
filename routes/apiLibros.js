import Express from "express";
const libro = Express();
import { getAuth } from "../controllers/controllerLibro.js";


libro.get('/auth/:nombre_usuario/:pass', getAuth);

export { libro }