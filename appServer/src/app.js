const express = require('express')
const morgan = require('morgan')
const app = express() 
const PORT = 5000

/* Módulo Morgan */
app.use(morgan('dev'))
/* Recibir tipo JSON */
app.use(express.json())

app.disable('etag')

/* Rutas */
app.get('/hola', (req, res) => {
    res.json({message: "Hi JSON, how are you?"})
})

app.listen(PORT, () => {
    console.log('Servidor en el puerto', PORT)
})