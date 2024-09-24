//1. llamar a la libreria express
const express = require('express'); /* Se usa el require para llamar la libreria por defecto de express es lo equivalente a import */
//2.a Crear una instancia de express
const app = express();
//2.b. Configurar mi instancia de express
app.use(express.json());

//3. Definir rutas de mi servidor
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000);