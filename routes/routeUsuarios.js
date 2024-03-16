import  Express from "express";
const usuario = Express();
import { postUsuario, getUsuario } from "../controllers/controllerUsuario.js";

usuario.post('', postUsuario)
usuario.get('', getUsuario)

export {usuario}