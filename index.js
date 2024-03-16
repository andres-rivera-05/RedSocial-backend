import Express from "express";
const app = Express();
import { usuario } from "./routes/routeUsuarios.js";
import { publicacion } from "./routes/routePublicacion.js";
const PORT = 7000;
// Middleware 
app.use(Express.json());

app.use('/api/usuario', usuario)
app.use('/api/publicacion', publicacion)

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`)
});