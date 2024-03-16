-- Active: 1707795232143@@127.0.0.1@5432@redsocialdb@public

CREATE Table tbl_rol (
    id SERIAL PRIMARY KEY,
    nombre_rol VARCHAR(200),
    fecha_creacion TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true
)

CREATE Table tbl_usuarios (
    nombre_usuario VARCHAR(20) PRIMARY KEY, 
    correo_electronico VARCHAR(50), 
    contrasena VARCHAR(20), 
    nombre VARCHAR(200), 
    apellido VARCHAR(200), 
    id_rol int, 
    activo BOOLEAN DEFAULT true, constraint fk_id_rol Foreign Key (id_rol) REFERENCES tbl_rol (id)
)

CREATE Table tbl_publicacion (
    id SERIAL PRIMARY KEY, 
    caption VARCHAR(250), 
    nombre_usuario VARCHAR(20) REFERENCES tbl_usuarios (nombre_usuario), 
    fecha_post TIMESTAMP DEFAULT current_timestamp, 
    activo BOOLEAN DEFAULT true
)

CREATE Table tbl_comentario
(
    id SERIAL PRIMARY KEY,
    caption TEXT,
    nombre_usuario VARCHAR(20) REFERENCES tbl_usuarios(nombre_usuario),
    id_post INTEGER REFERENCES tbl_publicacion(id),
    fecha_comentario TIMESTAMP DEFAULT current_timestamp,
    activo BOOLEAN DEFAULT true
)

