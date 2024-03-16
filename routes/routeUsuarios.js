import  Express from "express";
const usuario = Express();
import { postUsuario, getUsuario, putUsuario, deleteUsuario} from "../controllers/controllerUsuario.js";

usuario.post('', postUsuario)
usuario.get('', getUsuario)
usuario.put('/actualizar/:nombre_usuario', putUsuario)
usuario.delete('/delete/:nombre_usuario', deleteUsuario)

// GET:http://localhost:7000/api/usuario
// POST:http://localhost:7000/api/usuario
// PUT:http://localhost:7000/api/usuario/actualizar/
// DELETE:http://localhost:7000/api/usuario/delete/

export {usuario}