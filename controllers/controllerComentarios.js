import { db } from "../db/conn.js";

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
  try{
      const id = req.params.id;
      console.log(id)
      const { caption, nombre_usuario } = req.body;
      const params = [caption, nombre_usuario, id]

      const sql = `INSERT INTO tbl_comentario
                (caption, nombre_usuario, id_post)
                VALUES
                ($1, $2, $3) returning caption, nombre_usuario, 'comentario publicado' mensaje`;

      const result = await db.query(sql, params)
      res.json(result)

  }catch(err){
    res.status(500).json({mensaje: err.message})
  }
  
}

const putComentario = (req, res) => {

}

const deleteComentario = (req, res) => {

}

export { getComentarios, postComentario, putComentario, deleteComentario}