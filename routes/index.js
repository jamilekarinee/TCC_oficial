var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aprenda TypeScript' });
});

router.get('/ARQUIVOS_EJS/bibliografia', (req, res) => {
  res.render('ARQUIVOS_EJS/bibliografia'); // OK 
}); 

router.get('/ARQUIVOS_EJS/faleconosco', (req, res) => {
  res.render('ARQUIVOS_EJS/faleconosco'); // OK 
}); 

router.get('/ARQUIVOS_EJS/sobre', (req, res) => {
  res.render('ARQUIVOS_EJS/sobre'); // OK 
}); 

// ASSUNTOS 
  // ARRAY 
  router.get('/ARQUIVOS_EJS/ASSUNTOS/boolean', (req, res) => {
    res.render('/ARQUIVOS_EJS/ASSUNTOS/boolean'); // not ok  
  }); 
  
  // BOOLEAN 
  // CLASS
  // IF E ELSE 
  // = E : 
  // LET E CONST 
  // NUMBER
  // STRING 

module.exports = router; 