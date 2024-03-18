import { db } from "../db/conn.js";

const getPublicaion = async (req, res) => {

    const sql = `SELECT 
                p.id,
                p.caption,
                p.nombre_usuario,
                TO_CHAR(p.fecha_post, 'YYYY-MM-DD') AS fecha_post
            FROM
                tbl_publicacion AS p
                JOIN tbl_usuarios AS u ON p.nombre_usuario = u.nombre_usuario
            ORDER BY p.fecha_post DESC;`;

    const result = await db.query(sql)
    if (result.length === 0) {
        res.status(404).json({ mensaje: "No hay publicaciones" })
    } else {
        res.json(result);
    }
}

const postPublicacion = async (req, res) => {

    try {
        const { caption, nombre_usuario } = req.body;
        const params = [caption, nombre_usuario];

        const sql = `insert into tbl_publicacion
                 (caption, nombre_usuario)
                 values
                 ($1, $2) returning 'publicacion Creada' mensaje`

        const result = await db.query(sql, params);
        res.json(result)

    } catch (err) {
        console.err("Error en".err)
    }
}

const putPublicacion = async (req, res) => {

    try {
        const id = req.params.id;
        const { caption } = req.body;
        const params = [caption, id]

        const sql = `update tbl_publicacion
                    set caption = $1
                where id = $2 returning caption,'publicacion actualizada' mensaje`;

        const result = await db.query(sql, params);

        if (result.length === 0) {
            res.status(404).json({ mensaje: "No se puede editar la publicacion porque no existe" })
        } else {
            res.json(result);
        }

    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }

}

const deletePublicacion = async (req, res) => {

    try {
        const id = req.params.id;
        const params = [id]

        const sql = `update tbl_publicacion
                    set activo = false
                where id = $1 returning activo,'publicacion eliminada' mensaje`;

        const result = await db.query(sql, params);

        if (result.length === 0) {
            res.status(404).json({ mensaje: "No se puede eliminar la publicacion porque no existe" })
        } else {
            res.json(result);
        }

    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }


}

export { getPublicaion, postPublicacion, putPublicacion, deletePublicacion }