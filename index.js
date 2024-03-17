import Express from "express";
const app = Express();
import { usuario } from "./routes/routeUsuarios.js";
import { publicacion } from "./routes/routePublicacion.js";
import { comentarios } from "./routes/routeComentarios.js";
import cors from 'cors'
const PORT = 7000;

// Middleware 
app.use(Express.json());
const corsOptions = {
    origin: 'http://localhost:5173',
    Credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions))
app.use('/api/usuario', usuario)
app.use('/api/publicacion', publicacion)
app.use('/api/comentarios', comentarios)

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`)
});