'use strict'

//cargar express

var express = require ('express');

//cargar controlador

var ArticleController = require ('../controllers/article');

// llamar router de express

var router = express.Router();

// al no funcionar multiparty se crea con multer
var crypto = require('crypto');
const multer = require('multer');


// se configura donde sera guardado el archivo
const storage = multer.diskStorage({
    destination(req, file, cb){
      cb(null, './upload/articles');
    },
   
    filename(req, file={}, cb){
      const { originalname } = file;
   
      const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
      // cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);
      crypto.pseudoRandomBytes(16, function (err, raw) {
        cb(null, raw.toString('hex') + Date.now() + fileExtension);
      });
    },
   
  });
  var mul_upload = multer({dest: './upload/articles',storage});


// crear rutas

//rutas de pruebas

router.post('/datos-curso', ArticleController.datosCurso);


router.get('/test-de-controlador', ArticleController.test);

//rutas utiles

router.post('/api/save', ArticleController.save); //guardar art en la base
router.get('/api/articles/:last?', ArticleController.getArticles); //con interrogacion es opcional
router.get('/api/article/:id', ArticleController.getArticle); // sin interrogacion es obligatorio para acceder a la ruta
router.put('/api/article/:id', ArticleController.update); // modificar art
router.delete('/api/article/:id', ArticleController.delete); // borrar articulo 
router.post('/api/upload-image/:id?', [mul_upload.single('file0')], ArticleController.upload); // subir archivo, seg parametro va el midleware
router.get('/api/get-image/:image', ArticleController.getImage); //obtiene imagen del backend
router.get('/api/search/:search', ArticleController.search) //buscador

// exportar

module.exports = router;
