var express = require('express');
var router = express.Router();
let db = require('../utils/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Procópio da Rede' });
});

router.get('/autores/listar', function(req, res){
  let cmd = 'SELECT idAutor, NoAutor, NoNacionalidade';
      cmd += ' FROM TbAutor AS a INNER JOIN TbNacionalidade';
      cmd += 'ON a.IdNacionalidade = n.IdNacionalidade';
      cmd += 'ORDER BY NoAutor'; 
db.query(cmd, [], function(erro, listagem)){
  if (erro){
    res.send(erro);
  }
  res.render('autores-lista',{resultado:listagem})
}
});
    
  router.get('/autores/add', function(req,res) {

  res.render('autores-lista');
});

module.exports = router;
