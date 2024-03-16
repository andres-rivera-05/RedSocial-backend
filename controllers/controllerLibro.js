import { db } from "../db/conn.js";

const getAuth = async (req, res) => {

    const { nombre_usuario, pass } = req.params;

    const sql = ` select nombre_usuario from tbl_users 
                    where nombre_usuario = $1 
                    and contrasena = $2 `;

    const result = await db.query(sql, [nombre_usuario, pass]);

    if (result.length === 0) {
        res.status(404).json({ mensaje: "Usuario y Contraseña no coinciden" })
    } else {
        res.json(result);
    }
}

export { getAuth };


