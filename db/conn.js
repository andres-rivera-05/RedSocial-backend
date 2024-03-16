import pg from "pg-promise";
const pgp = pg();
const cnstr = `postgresql://postgres:1256@localhost:5432/redsocialdb`
const db = pgp(cnstr);

db.connect()
    .then(() => {
        console.log("Conexion Exitosa")
    })
    .catch((err) => {
        console.log(`Error de conexion ${err}`)
    })

export { db }