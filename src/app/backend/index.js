'use strict'

var mongoose = require('mongoose');//llamado a mongoose
var app = require('./app'); //llamado a app creada en app.js
var port = 3900; // eleccion de puerto

mongoose.set('useFindAndModify',false);
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useNewUrlParser:true, useUnifiedTopology:true})

.then(()=>{
console.log('la conexión se ha realizado bien, muy bien!!!!');

//crear servido y ponerme a escuchar peticiones http,
app.listen(port,()=>{

   console.log('Servidor corriendo en http://localhost:'+port);

})

});
