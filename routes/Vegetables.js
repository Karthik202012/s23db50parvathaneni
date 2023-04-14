var express = require('express');
const vegetables_controlers= require('../controllers/Vegetables');
var router = express.Router();
/* GET vegetables */
router.get('/', vegetables_controlers.vegetables_view_all_Page );
module.exports = router