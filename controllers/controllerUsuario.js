import { db } from "../db/conn.js";

const postUsuario = async (req, res) => {

    try {
        const {
            nombre_usuario,
            correo_electronico,
            contrasena,
            nombre,
            apellido
        } = req.body;

        const params = [nombre_usuario, correo_electronico, contrasena, nombre, apellido, 1];

        const sql = `insert into tbl_usuarios
                (nombre_usuario, correo_electronico, contrasena, nombre, apellido, id_rol)
                values
                ($1, $2,$3,$4,$5, $6) returning nombre_usuario, 'Creado con exito' mensaje`;

        const resul = await db.query(sql, params);
        res.json(resul);
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
}

const getUsuario = async (req, res) => {
    const sql = `select * from tbl_usuarios`;
    const resul = await db.query(sql);
    res.json(resul)
}

export { postUsuario, getUsuario }