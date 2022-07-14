'use strict'

//cargar modulos de node para cargar servidor
var express = require('express'); //carga modulo express
var bodyParser = require('body-parser'); // parser convierte datos de la peticion en obj utulizable por JS

//ejecutar express (http)
var  app = express();

//cargar ficheros rutas

var article_routes = require('./routes/article');

//cargar middLewares

app.use(bodyParser.urlencoded({extended:false})); //carga el body parser
app.use(bodyParser.json()); //convierte los datos en Json

//CORS para recibir peticiones desde cualquier frontend

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});





//añadir prefijos rutas / cargar rutas

app.use(article_routes);

//ruta de prueba para el API REST
//nos llevamos este metodo al controller
/*app.post('/probando',(req, res)=>{
  var hola = req.body.hola;

return res.status(200).send({
nombre: 'backend de prueba',
autor: 'Eze Decandido',
contacto: '@ezedecan',
hola

});

});*/






// exportar modulo (fichero actual)

module.exports = app;  // usar objeto fuera del fichero
