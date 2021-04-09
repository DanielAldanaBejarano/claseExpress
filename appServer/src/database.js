/* Importación del módulo que permite conectar a la base de datos */
import mongoose from 'mongoose'

/* Mongo Atlas */
const atlas = "mongodb+srv://Dann:1010*@claseexpress.spsvi.mongodb.net/juegos?retryWrites=true&w=majority"
/* Mogo DB Nativo */
const native = "mongodb://localhost/claseExpress"

mongoose.connect(atlas, {useNewUrlParse: true, useUnifiedTopology: true})
    .then(db => {
        console.log('Base de datos conectada')
    })
    .catch(err => {
        console.log('Error en la base de datos', err)
    })



