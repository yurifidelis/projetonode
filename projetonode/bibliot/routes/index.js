var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expres' });
});

router.get('/sobre', function(req, res) {
  res.send('<h2>Sobre rotas</h2>');
});

router.get('/', function(req, res, next) {
  res.send("<h2>Sobre rotas....</h2>");});
;




module.exports = router;
