var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Ayuda', function(req, res, next) {
  res.render('Ayuda', { title: 'Express' });
});


router.get('/Descargar', function(req, res, next) {
  res.render('Descargar', { title: 'Express' });
});


module.exports = router;
