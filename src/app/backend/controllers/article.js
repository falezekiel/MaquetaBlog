'use strict'
//importar validator

var validator = require('validator');

var fs = require('fs'); // importa libreria fs para comprobar existencia de ficheros o borrarlos
var path = require('path'); // tiene metodos para manejar las rutas

const article = require('../models/article');

// importar cargar modelo article para poder usar la clase

var Article = require('../models/article');
const { findOneAndUpdate } = require('../models/article');

var controller = {

  datosCurso: (req, res) => {
    var hola = req.body.hola;

    return res.status(200).send({
      nombre: 'backend de prueba',
      autor: 'Eze Decandido',
      contacto: '@ezedecan',
      hola

    });

  },

  test: (req, res) => {

    return res.status(200).send({

      message: 'soy el metodo test del controlador'

    });

  },

  save: (req, res) => {
    //recoger  datos por post
    var params = req.body;

    console.log(params);

    //validar datos

    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    }
    catch (err) {

      return res.status(200).send({
        status: 'error',
        message: 'Faltan datos por enviar',


      });


    };

    if (validate_title && validate_content) {

      //crear el objeto a guardar
      var article = new Article();

      //asignar valores

      article.title = params.title;
      article.content = params.content;
      if(params.image){
       
        article.image = params.image;

      } else {

        article.image = null; //va por separado

      }
      

      //guardar el articulo
      article.save((err, articleStored) => {

        if (err || !articleStored) {
          return res.status(404).send({
            status: 'error',
            message: 'El artículo no se ha guardado',

          });

        }


        //devolver respuesta


        return res.status(200).send({
          status: 'success',
          articleStored


        });

      });

    } else {
      return res.status(200).send({
        status: 'error',
        message: 'Los datos no son validos',


      });

    }

  },

  // metodo que devuelve los articulos de la base al front

  getArticles: (req, res) => {

    var query = Article.find({});

    var last = req.params.last;

    if (last || last != undefined) {

      query.limit(5);

    }


    // find para sacar datos de la base
    //dentro de las llaves del find se pueden poner condiciones
    //sort hace que podamos manejar el orden, en este caso a la inversa por id (mas nuevos primero)
    query.sort('-_id').exec((err, articles) => {

      if (err) {
        return res.status(500).send({
          status: 'success',
          amessage: 'error al devolver los artículos'
        });
      }

      if (!articles) {
        return res.status(404).send({
          status: 'success',
          message: 'no hay artículos para mostrar'
        });
      }


      return res.status(200).send({
        status: 'success',
        articles

      });


    });



  },

  getArticle: (req, res) => {

    // recoger id de la url

    var articleId = req.params.id;

    // comprobar que existe

    if (!articleId || articleId == null) {

      return res.status(404).send({
        status: 'error',
        message: 'no existe el artículo'
      });

    }

    // buscar articulo

    Article.findById(articleId, (err, article) => {
      if (err) {

        return res.status(500).send({
          status: 'error',
          message: 'error al devolver los datos'
        });
      }

      if (!article) {
        return res.status(404).send({
          status: 'error',
          message: 'no existe el artículo'
        });

      }

      // devolverlo en json

      return res.status(200).send({
        status: 'success',
        article
      });


    });


  },
  // no modifica ID ni fecha solo los datos que le hemos pasado
  update: (req, res) => {

    // recoger el ID del articulo por la url

    var articleId = req.params.id;

    // recoger los datos que llegan por put

    var params = req.body;

    // validar datos

    try {

      var validateTitle = !validator.isEmpty(params.title);
      var validateContent = !validator.isEmpty(params.content);


    } catch (err) {
      return res.status(200).send({
        status: 'error',
        message: 'Faltan datos por enviar'
      });

    }

    if (validateTitle && validateContent) {
      // find and update
      //pasar art por ID, params que me llegan, new devuelve el art actualizado          
      Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {

        if (err) {
          return res.status(500).send({
            status: 'error',
            message: 'error al actualizar'
          });

        }

        if (!articleUpdated) {
          return res.status(404).send({
            status: 'error',
            message: 'no existe el articulo'
          });
        }

        return res.status(200).send({
          status: 'success',
          article: articleUpdated
        });

      });

    } else {
      //devolver respuesta
      return res.status(200).send({
        status: 'error',
        message: 'la validacion no es correcta'
      });

    }

  },

  delete: (req, res) => {

    //recoger ID por articulo de la url

    var articleId = req.params.id;

    //find and delete

    Article.findOneAndDelete({ _id: articleId }, (err, articleRemoved) => {

      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'no se ha borrado el articulo'
        });

      }

      if (!articleRemoved) {
        return res.status(404).send({
          status: 'error',
          message: 'el articulo a borrar no existe'
        });
      }

      return res.status(200).send({
        status: 'success',
        article: articleRemoved

      });


    })


  },

  upload: (req, res) => {

    // recoge los parametros por ID
    var articleId = req.params.id;
    if (req.file) {

      //obtener nombre del fichero
      var file_path = req.file.path; // obtener el path
      

      var file_split = file_path.split('\\'); //separa el path en diferentes tramos devuelve un array

      var file_name = file_split[2]; // de ese array toma el que necesitamos que es el nombre del archivo

      // obtener extension del fichero

      var ext_split = req.file.originalname.split('\.'); // separar la extension

      var file_ext = ext_split[1] // obtiene la extension

      // comprobar si la extension es valida

      if (file_ext != 'png' && file_ext != 'gif' && file_ext != 'jpg' && file_ext != 'jpeg') {

        // borrar archivo subido
        fs.unlink(file_path, (err) => {

          return res.status(200).send({
            status: 'error',
            message: 'Extension del archivo no valida'

          });


        })

      } else {

        // si todo es valido buscar el articulo y actualizarlo

        var articleId = req.params.id;

        if(articleId){

      

        Article.findOneAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (err, articleUpdated) => {

          if (err || !articleUpdated) {

            return res.status(200).send({
              status: 'error',
              message: 'error al guardar el archivo'
            });


          }


          return res.status(200).send({
            status: 'success',
            article: articleUpdated
          });


        });

      } else  { return res.status(200).send({
        status: 'success',
        image: file_name
      });
    }
      

    };



    }
},


  getImage: function (req, res) {
    var fileName = req.params.image;
    var pathFile = './upload/articles/' + fileName;

    fs.stat(pathFile, (err, exists) => {
        if (exists) {
            return res.sendFile(path.resolve(pathFile));
        } else {
            return res.status(404).send({
                message: 'No existe la imagen'
            });
        }
    });
},

search: (req, res)=>{

  // sacar el string a buscar

var searchString = req.params.search;

  // find or, "$or" metodo de mongoose
  //linea title, cuando el titulo contenga searchString, sacara los articulos

  Article.find({
    "$or": [
      {
        "title": {"$regex": searchString, "$options":"i"}
      },
      {
        "content": {"$regex": searchString, "$options":"i"}
      }
    ]

  }).sort([['date', 'descending']]) //ordena lo obtenido de manera descendente
  .exec((err, articles)=>{

if(err){

  return res.status(500).send({
    status: 'error',
   message: 'no se pudo realizar la busqueda'
  });

}

if(!articles || articles.length <=0){
  return res.status(404).send({
    status: 'error',
   message: 'la busqueda no arrojó resultados'
  });

}



    return res.status(200).send({
      status: 'success',
     articles
   
  });

  });


}
  
}//end controller

//exportar controlador

module.exports = controller;
