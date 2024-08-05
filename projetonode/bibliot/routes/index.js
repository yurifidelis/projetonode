var express = require('express');
var router = express.Router();
let db = require('../utils/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Procópio da Rede' });
});

router.get('/sobre', function(req, res) {
  res.send('<h2>Sobre rotas</h2>');
});


router.get('/ola/:nome', function(req, res) {
  res.send('<h2>Ola,' + req.params.nome + "</h2>");
});

router.get('/imc', function(req, res) {
  let peso = req.query.peso;
  let estatura = req.query.estatura

  let imc = peso / Math.pow(estatura,2);
  let msg = "<h3> seu imc é:" + imc.toFixed(2) +  "</h3>";
  res.send(msg);
});

  let autores = ["miriam leitão",'ana beatriz'];
  router.use(express.urlencoded({extended: true}));

  router.get('/autores', function(req, res) {
    res.json(autores);
  });
  router.get('/autores/consulta/:id', function(req,res){
  res.json(autores)
});

router.get('/autores/consulta/:id', function(req,res) {
  let id = req.params.id;
  res.json(autores[id]);
});
router.post('/autores/inclui', function(req,res) {
  let nome = req.body.nome;
  autores.push(nome);
  res.json(autores);
});

router.post('/autores/altera', function(req,res) {
  let id = req.body.params.id;
  let nome = req.body.nome;
  
  autores.splice(id,1);
  res.json(autores);
});

router.get('/autores/listar', function(req,res) {
  db.query('SELECT * FROM tbautor', [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.send(listagem);
  });
});

module.exports = router;
