var Vegetables = require('../models/Vegetables');
// List of all Vegetables
exports.vegetables_list = async function(req, res) {
    try{
    theVegetables = await Vegetables.find();
    res.send(theVegetables);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
// for a specific Vegetables.
exports.vegetables_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Vegetables detail: ' + req.params.id);
};
// Handle Vegetables create on POST.
exports.vegetables_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Vegetables create POST');
};
// Handle Vegetables delete form on DELETE.
exports.vegetables_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Vegetables delete DELETE ' + req.params.id);
};
// Handle Vegetables update form on PUT.
exports.vegetables_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Vegetables update PUT' + req.params.id);
};