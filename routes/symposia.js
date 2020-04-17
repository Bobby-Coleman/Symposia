var express = require('express');
var router = express.Router();
const symposiaCtrl = require('../controllers/symposia');

const isAuth = (req, res, next) => { 
    req.isAuthenticated() ? next() : res.redirect('/auth/google');    
};
// DONT FORGET TO ADD isAuth!!!!!!!!!!!!!!!!!!
router.get('/', symposiaCtrl.index);
router.get('/chronicle', isAuth, symposiaCtrl.chronicle);
router.get('/list', symposiaCtrl.list);
router.get('/new', isAuth, symposiaCtrl.new);
router.get("/:id/edit", symposiaCtrl.edit);
router.get('/:id', symposiaCtrl.show);
router.put('/:id', symposiaCtrl.update);
router.post('/chronicle', symposiaCtrl.create);
router.post("/", symposiaCtrl.crt);

module.exports = router;