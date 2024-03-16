import Express from "express";
const comentarios = Express();
import { getComentarios, postComentario, } from "../controllers/controllerComentarios.js";

comentarios.get('/:id', getComentarios)
comentarios.post('/comentarios/:id', postComentario)
comentarios.put('',)
comentarios.delete('',)

// GET:http://localhost:7000/api/comentarios/:id publicacion
// POST:http://localhost:7000/api/comentario/comentarios/:id publicacion

export {comentarios}