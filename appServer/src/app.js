/*  import nombreModulo from directorioDelModulo */
import express from 'express'
import morgan from 'morgan'

/* Requerir el archivo de conexión BD */
import './database'

const app = express()
const PORT = 5000

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({message: "Respondido"})
})

app.listen(PORT, () => {
    console.log('Servidor escuchando el puerto', PORT)
})