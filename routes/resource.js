// var express = require('express');
// var router = express.Router();
// // Require controller modules.
// var api_controller = require('../controllers/api');
// var vegetables_controller = require('../controllers/Vegetables');
// /// API ROUTE ///
// // GET resources base.
// router.get('/', api_controller.api);
// /// vegetables ROUTES ///
// // POST request for creating a vegetables.
// router.post('/Vegetables', vegetables_controller.vegetables_create_post);
// // DELETE request to delete Costume.
// router.delete('/Vegetables/:id', vegetables_controller.vegetables_delete);
// // PUT request to update Costume.
// router.put('/Vegetables/:id', vegetables_controller.vegetables_update_put);
// // GET request for one Costume.
// router.get('/Vegetables/:id', vegetables_controller.vegetables_detail);
// // GET request for list of all Costume items.
// router.get('/Vegetables', vegetables_controller.vegetables_list);

// // GET request for one costume.
// router.get('/Vegetables/:id', vegetables_controller.vegetables_detail);
// module.exports = router;


var express = require("express");
var router = express.Router();
// Require controller modules.
var api_controller = require("../controllers/api");
var vegetables_controller = require("../controllers/Vegetables");
/// API ROUTE ///
// GET resources base.
router.get("/", api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post("/Vegetables", vegetables_controller.vegetables_create_post);
// DELETE request to delete Costume.
router.delete("/Vegetables/:id", vegetables_controller.vegetables_delete);
// PUT request to update Costume.
router.put("/Vegetables/:id", vegetables_controller.vegetables_update_put);
// GET request for one Costume.
router.get("/Vegetables/:id", vegetables_controller.vegetables_detail);
// GET request for list of all Costume items.
router.get("/Vegetables", vegetables_controller.vegetables_list);
module.exports = router;

