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

const putUsuario = async (req, res) => {

    try {
        const { correo_electronico, nombre, apellido } = req.body;
        const nombre_usuario = req.params.nombre_usuario;
        const params = [correo_electronico, nombre, apellido, nombre_usuario];

        const sql = `update tbl_usuarios
                 set correo_electronico = $1,
                    nombre = $2,
                    apellido = $3
                where nombre_usuario = $4 returning nombre_usuario, 'Usuario Actualizado con Exito' mensaje`;

        const result = await db.query(sql, params);

        if (result.length === 0) {
            res.status(404).json({ mensaje: "El Usuario no Existe no puede se actulizado" })
        } else {
            res.status(200).json(result)
        }
    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const nombre_usuario = req.params.nombre_usuario;
        const params = [nombre_usuario]
        const sql = `update tbl_usuarios
                    set activo = false
                 where nombre_usuario = $1 returning nombre_usuario, 'Elimanado con exito' mensaje`;

        const result = await db.query(sql, params);

        if (result.length === 0) {
            res.status(404).json({ mensaje: "El usuario a eliminar no existe" })
        } else {
            res.json(result)
        }

    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }

}

export { postUsuario, getUsuario, putUsuario, deleteUsuario }