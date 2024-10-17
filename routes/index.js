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
  router.get('/ARQUIVOS_EJS/ASSUNTOS/array', (req, res) => {
    res.render('ARQUIVOS_EJS/ASSUNTOS/array'); // OK 
    }); 
  // BOOLEAN 
  router.get('/ARQUIVOS_EJS/ASSUNTOS/boolean', (req, res) => {
    res.render('ARQUIVOS_EJS/ASSUNTOS/boolean'); // OK 
    }); 
  // CLASS
  router.get('/ARQUIVOS_EJS/ASSUNTOS/class', (req, res) => {
    res.render('ARQUIVOS_EJS/ASSUNTOS/class'); // OK 
    }); 
  // IF E ELSE 
  router.get('/ARQUIVOS_EJS/ASSUNTOS/if_e_else', (req, res) => {
    res.render('ARQUIVOS_EJS/ASSUNTOS/if_e_else'); // OK 
    }); 
  // = E : 
  router.get('/ARQUIVOS_EJS/ASSUNTOS/igual_e_dois_pontos', (req, res) => {
    res.render('ARQUIVOS_EJS/ASSUNTOS/igual_e_dois_pontos'); // OK 
    }); 
  // LET E CONST 
  router.get('/ARQUIVOS_EJS/ASSUNTOS/let_e_const', (req, res) => {
    res.render('ARQUIVOS_EJS/ASSUNTOS/let_e_const'); // OK 
    }); 
  // NUMBER 
  router.get('/ARQUIVOS_EJS/ASSUNTOS/number', (req, res) => {
    res.render('ARQUIVOS_EJS/ASSUNTOS/number'); // OK 
    }); 
  // STRING 
  router.get('/ARQUIVOS_EJS/ASSUNTOS/string', (req, res) => {
    res.render('ARQUIVOS_EJS/ASSUNTOS/string'); // OK 
    }); 

module.exports = router; 