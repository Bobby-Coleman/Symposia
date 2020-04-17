var express = require('express');
var router = express.Router();
const descriptionsCtrl = require('../controllers/descriptions');


router.post('/symposia/:id/descriptions', descriptionsCtrl.create);

module.exports = router;