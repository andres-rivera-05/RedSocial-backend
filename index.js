import Express from "express";
const app = Express();
import { usuario } from "./routes/routeUsuarios.js";
const PORT = 7000;
// Middleware 
app.use(Express.json());

app.use('/api/usuario', usuario)

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`)
});