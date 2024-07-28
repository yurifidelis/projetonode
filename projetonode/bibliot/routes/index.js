var express = require('express');
var router = express.Router();

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
module.exports = router;
