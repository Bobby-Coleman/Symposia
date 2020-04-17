var express = require('express');
var router = express.Router();
const symposiaCtrl = require('../controllers/symposia');

const isAuth = (req, res, next) => { 
    req.isAuthenticated() ? next() : res.redirect('/auth/google');    
};
// DONT FORGET TO ADD isAuth!!!!!!!!!!!!!!!!!!
router.get('/', symposiaCtrl.index);
router.get('/new', isAuth, symposiaCtrl.new);
router.get('/chronicle', isAuth, symposiaCtrl.chronicle);
router.post('/chronicle', symposiaCtrl.create);
router.get('/list', symposiaCtrl.list);
router.get('/:id', symposiaCtrl.show);


module.exports = router;