import  Express  from "express";
const publicacion = Express();
import { getPublicaion, postPublicacion, putPublicacion, deletePublicacion } from "../controllers/controllerPublicacion.js";

publicacion.get('', getPublicaion)
publicacion.post('', postPublicacion)
publicacion.put('', putPublicacion)
publicacion.delete('', deletePublicacion)

// GET:http://localhost:7000/api/publicacion
export { publicacion }