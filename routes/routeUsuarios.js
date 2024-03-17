import  Express from "express";
const usuario = Express();
import { postUsuario, getUsuario, putUsuario, deleteUsuario, getAuth} from "../controllers/controllerUsuario.js";

usuario.post('', postUsuario)
usuario.get('', getUsuario)
usuario.get('/:nombre_usuario/:contrasena', getAuth)
usuario.put('/actualizar/:nombre_usuario', putUsuario)
usuario.delete('/delete/:nombre_usuario', deleteUsuario)

// GET:http://localhost:7000/api/usuario
// GET:http://localhost:7000/api/usuario/:nombre_usuario/:contrasena
// POST:http://localhost:7000/api/usuario
// PUT:http://localhost:7000/api/usuario/actualizar/
// DELETE:http://localhost:7000/api/usuario/delete/

export {usuario}