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
exports.vegetables_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Vegetables();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Vegetable_name = req.body.Vegetable_name;
    document.Vegetable_colour = req.body.Vegetable_colour;
    document.vegetable_price = req.body.vegetable_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
// Handle Vegetables delete form on DELETE.
exports.vegetables_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Vegetables delete DELETE ' + req.params.id);
};
// Handle Vegetables update form on PUT.
exports.vegetables_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Vegetables update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.vegetables_view_all_Page = async function(req, res) {
    try{
    theVegetables = await Vegetables.find();
    res.render('Vegetables', { title: 'Vegetables Search Results', results: theVegetables });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }

    // for a specific Costume.
exports.vegetables_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Vegetables.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    