import { db } from "../db/conn.js";

const getPublicaion = async (req, res) => {

    const sql = `SELECT 
                p.id,
                p.caption,
                p.nombre_usuario
            FROM
                tbl_publicacion AS p
                JOIN tbl_usuarios AS u ON p.nombre_usuario = u.nombre_usuario
            ORDER BY p.fecha_post DESC;`;

    const result = await db.query(sql)
    if(result.length === 0){
        res.status(404).json({mensaje: "No hay publicaciones"})
    }else{
        res.json(result);
    }
}

const postPublicacion = async (req, res) => {

}

const putPublicacion = async (req, res) => {

}

const deletePublicacion = async (req, res) => {

}

export { getPublicaion, postPublicacion, putPublicacion, deletePublicacion }