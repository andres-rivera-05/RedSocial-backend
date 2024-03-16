import  Express from "express";
const usuario = Express();
import { postUsuario, getUsuario, putUsuario} from "../controllers/controllerUsuario.js";

usuario.post('', postUsuario)
usuario.get('', getUsuario)
usuario.put('/actualizar/:nombre_usuario', putUsuario)

// http://localhost:7000/api/usuario/actualizar/David
export {usuario}