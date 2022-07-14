'use strict'

var mongoose = require ('mongoose'); // carga mongoose

var Schema = mongoose.Schema; // carga Schema

var ArticleSchema = Schema  ({
  title: String,
  content:String,
  date: {type: Date, default: Date.now},// por default fecha actual
  image:String

}); // define el schema del articulo

// exportar el modelo

module.exports = mongoose.model('Article', ArticleSchema); //primer parametro es el nombre del modelo,el segundo parametro es que esquema voy a utilizar
//en este caso mongo crea automaticamente una colección articles ,pluralizando el nombre del modelo, guarda los documentos de este tipo y con esta estructura dentro de la colección
