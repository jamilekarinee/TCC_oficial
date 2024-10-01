var express = require('express');
var router = express.Router();
let db = require('../utils/db');


/* listar GENEROS */
router.get('/listagem_privada', function (req, res) {
  let cmd = 'SELECT id_avaliacao, email_avaliacao, nome_avaliacao FROM tb_avaliacao ORDER BY id_avaliacao; ';
  db.query(cmd, [], function (erro, listagem) {
    if (erro) {
      res.send(erro);
    }
    res.render('avaliacoes_lista', { resultado: listagem });
  })
});

/* adicionar AVALIACOES */
router.get('/add', function (req, res) { /* post vai incluir algo */
  res.render('avaliacoes', { resultado: {} });
});

/* adicionar AVALIACOES */
router.post('/add', function (req, res) {
  let cmd = 'INSERT INTO tb_avaliacao (email_avaliacao, nome_avaliacao) VALUES (?, ?) ';
  let email = req.body.email;
  let avaliacao_do_cliente = req.body.avaliacao_do_cliente;
  db.query(cmd, [email, avaliacao_do_cliente], function (erro) {
    if (erro) {
      res.send(erro);
    }
    res.redirect('/avaliacoes/add');
  })
});

router.delete('/delete/:id', function (req, res) {
  let id = req.params.id;
  let cmd = 'DELETE FROM tb_avaliacao WHERE id_avaliacao = ? ';
  db.query(cmd, [id], function (erro) {
    if (erro) {
      res.send(erro);
    }
    res.redirect(303, '/avaliacoes/listagem_privada');
  })
}); module.exports = router; 
