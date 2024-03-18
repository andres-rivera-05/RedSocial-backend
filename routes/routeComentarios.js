import Express from "express";
const comentarios = Express();
import { getComentarios, postComentario, putComentario, deleteComentario, getComentarioEdit } from "../controllers/controllerComentarios.js";

comentarios.get('/:id', getComentarios)
comentarios.get('/editar/:id', getComentarioEdit)
comentarios.post('/comentarios/:id', postComentario)
comentarios.put('/editComentario/:id', putComentario)
comentarios.delete('/delete/:id', deleteComentario)

// GET:http://localhost:7000/api/comentarios/:id publicacion
// GET:http://localhost:7000/api/comentarios/editar/:id publicacion
// POST:http://localhost:7000/api/comentarios/comentarios/:id publicacion
// PUT:http://localhost:7000/api/comentarios/editComentario/:id

export {comentarios}