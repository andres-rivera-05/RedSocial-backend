import  Express  from "express";
const publicacion = Express();
import { getPublicaion, postPublicacion, putPublicacion, deletePublicacion } from "../controllers/controllerPublicacion.js";

publicacion.get('', getPublicaion)
publicacion.post('', postPublicacion)
publicacion.put('/:id', putPublicacion)
publicacion.delete('/eliminar/:id', deletePublicacion)

// GET:http://localhost:7000/api/publicacion
// POST:http://localhost:7000/api/publicacion
// PUT:http://localhost:7000/api/publicacion/:id
// DELETE:http://localhost:7000/api/publicacion/eliminar/:id
export { publicacion }