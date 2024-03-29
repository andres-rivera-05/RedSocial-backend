import { db } from "../db/conn.js";


const getComentarioEdit = async (req,res) => {
    const id = req.params.id;
    const params = [id]

    const sql =`SELECT * FROM tbl_comentario WHERE id = $1;`
    const result = await db.query(sql, params)
    res.json(result)
}

const getComentarios = async (req, res) => {

    const id = req.params.id;
    const params = [id]

    const sql = `SELECT
                c.id AS comentario_id,
                c.caption AS comentario_contenido,
                c.fecha_comentario AS comentario_fecha,
                u.nombre_usuario AS usuario_nombre
            FROM
                tbl_comentario AS c
                JOIN tbl_usuarios AS u ON c.nombre_usuario = u.nombre_usuario
            WHERE
                c.id_post = $1;`;

    const result = await db.query(sql, params)
    res.json(result);

}

const postComentario = async (req, res) => {

    try {
        const id = req.params.id;
        const { caption, nombre_usuario } = req.body;
        const params = [caption, nombre_usuario, id]

        const sql = `INSERT INTO tbl_comentario
                (caption, nombre_usuario, id_post)
                VALUES
                ($1, $2, $3) returning caption, nombre_usuario, 'comentario publicado' mensaje`;

        const result = await db.query(sql, params)
        res.json(result)

    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }

}

const putComentario = async (req, res) => {
    
    try{
        const id = req.params.id;
        const { caption, nombre_usuario } = req.body;
        const params = [caption, nombre_usuario, id];

        const sql = `update tbl_comentario
                    set caption = $1,
                        nombre_usuario = $2
                where id = $3 returning caption, 'comentario actualizado' mensaje`;

        const result = await db.query(sql, params)
        if(result.length === 0){
            res.status(404).json({mensaje:"No existe el comentario"})
        }else{
            res.json(result)
        }     
    }catch(err){
       res.status(500).json({mensaje: err.message})
    }

}

const deleteComentario = async (req, res) => {
    const {id} = req.params;
    const sql = `delete from tbl_comentario 
                 WHERE id = $1 returning 'comentario eliminado' mensaje`;
    const result = await db.query(sql, [id])     
    res.json(result)      

}

export { getComentarios, postComentario, putComentario, deleteComentario, getComentarioEdit }