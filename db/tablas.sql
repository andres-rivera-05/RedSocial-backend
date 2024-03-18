-- Active: 1707795232143@@127.0.0.1@5432@redsocialdb@public

CREATE Table tbl_rol (
    id SERIAL PRIMARY KEY,
    nombre_rol VARCHAR(200),
    fecha_creacion TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true
)

SELECT * FROM tbl_rol

CREATE Table tbl_usuarios (
    nombre_usuario VARCHAR(20) PRIMARY KEY, 
    correo_electronico VARCHAR(50), 
    contrasena VARCHAR(20), 
    nombre VARCHAR(200), 
    apellido VARCHAR(200), 
    id_rol int, 
    activo BOOLEAN DEFAULT true, constraint fk_id_rol Foreign Key (id_rol) REFERENCES tbl_rol (id)
)

SELECT * FROM tbl_usuarios  

CREATE Table tbl_publicacion (
    id SERIAL PRIMARY KEY, 
    caption TYPE TEXT, 
    nombre_usuario VARCHAR(20) REFERENCES tbl_usuarios (nombre_usuario), 
    fecha_post TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true
)


SELECT * FROM tbl_publicacion 

CREATE Table tbl_comentario
(
    id SERIAL PRIMARY KEY,
    caption TEXT,
    nombre_usuario VARCHAR(20) REFERENCES tbl_usuarios(nombre_usuario),
    id_post INTEGER REFERENCES tbl_publicacion(id),
    fecha_comentario TIMESTAMP DEFAULT current_timestamp,
    activo BOOLEAN DEFAULT true
)

INSERT INTO tbl_comentario
(caption, nombre_usuario, id_post)
VALUES
('Este es mi primer comentario', 'Jade', 2);

SELECT * FROM tbl_comentario  

---consulta getPublicacion
SELECT 
    p.id,
    p.caption,
    p.nombre_usuario
FROM
    tbl_publicacion AS p
    JOIN tbl_usuarios AS u ON p.nombre_usuario = u.nombre_usuario
ORDER BY p.fecha_post DESC; 

--- get comentarios-publicacion
SELECT
    c.id AS comentario_id,
    c.caption AS comentario_contenido,
    c.fecha_comentario AS comentario_fecha,
    u.nombre_usuario AS usuario_nombre
FROM
    tbl_comentario AS c
    JOIN tbl_usuarios AS u ON c.nombre_usuario = u.nombre_usuario
WHERE
    c.id_post = 2;

--getAutenticacion
select nombre_usuario
from tbl_usuarios
where
    nombre_usuario = 'Jade'
    and contrasena = 'Jade2024';


TRUNCATE TABLE tbl_publicacion