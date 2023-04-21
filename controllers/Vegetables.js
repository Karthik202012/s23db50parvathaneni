var Vegetables = require("../models/Vegetables");

// List of all vegetables

exports.vegetables_list = async function (req, res) {

  try {

    theVegetables = await Vegetables.find();

    res.send(theVegetables);

  } catch (err) {

    res.status(500);

    res.send(`{"error": ${err}}`);

  }

};

// for a specific university.

// exports.vegetables_detail = function(req, res) {

// res.send('NOT IMPLEMENTED: vegetables detail: ' + req.params.id);

// };

// Handle vegetables create on POST.

exports.vegetables_create_post = async function (req, res) {

  console.log(req.body);

  let document = new Vegetables(); 

  document.Vegetable_name = req.body.Vegetable_name;

  document.Vegetable_colour = req.body.Vegetable_colour;

  document.vegetable_price = req.body.vegetable_price;

  try {

    let result = await document.save();

    res.send(result);

  } catch (err) {

    res.status(500);

    res.send(`{"error": ${err}}`);

  }

};



// Handle vegetables delete form on DELETE.

exports.vegetables_delete = async function (req, res) {

  console.log("delete " + req.params.id);

  try {

    result = await Vegetables.findByIdAndDelete(req.params.id);

    console.log("Removed " + result);

    res.send(result);

  } catch (err) {

    res.status(500);

    res.send(`{"error": Error deleting ${err}}`);

  }

};

// Handle vegetables update form on PUT.

// exports.vegetables_update_put = function (req, res) {

//   res.send("NOT IMPLEMENTED: Vegetables update PUT" + req.params.id);

// };



// VIEWS

// Handle a show all view

exports.vegetables_view_all_Page = async function (req, res) {

  try {

    theVegetables = await Vegetables.find();

    res.render("Vegetables", {

      title: "Vegetables Search Results",

      results: theVegetables,

    });

  } catch (err) {

    res.status(500);

    res.send(`{"error": ${err}}`);

  }

};



// for a specific vegetables.

exports.vegetables_detail = async function (req, res) {

  console.log("detail" + req.params.id);

  try {

    //id = "64395f4d366a4a377b6a2d80";

    result = await Vegetables.findById(req.params.id);

    res.send(result);

  } catch (error) {

    res.status(500);

    res.send(`{"error": document for id ${req.params.id} not found`);

  }

};



// Handle flower update form on PUT.

exports.vegetables_update_put = async function (req, res) {

  console.log(`update on id ${req.params.id} with body

${JSON.stringify(req.body)}`);

  try {

    let toUpdate = await Vegetables.findById(req.params.id);

    // Do updates of properties

    if (req.body.Vegetable_name)

      toUpdate.Vegetable_name = req.body.Vegetable_name;

    if (req.body.Vegetable_colour) toUpdate.Vegetable_colour = req.body.Vegetable_colour;

    if (req.body.vegetable_price) toUpdate.vegetable_price = req.body.vegetable_price;

    let result = await toUpdate.save();

    console.log("Sucess " + result);

    res.send(result);

  } catch (err) {

    res.status(500);

    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);

  }

};



// Handle a show one view with id specified by query

exports.vegetables_view_one_Page = async function (req, res) {

  console.log("single view for id " + req.query.id);

  try {

    result = await Vegetables.findById(req.query.id);

    res.render("VegetableDetail", {

      title: "Vegetables Details",

      toShow: result,

    });

  } catch (err) {

    res.status(500);

    res.send(`{'error': '${err}'}`);

  }

};



// Handle building the view for creating a costume.

// No body, no in path parameter, no query.

// Does not need to be async

exports.vegetables_create_Page = function (req, res) {

  console.log("create view");

  try {

    res.render("VegetableCreate", { title: "Vegetables Create" });

  } catch (err) {

    res.status(500);

    res.send(`{'error': '${err}'}`);

  }

};



// Handle building the view for updating a costume.

// query provides the id

exports.vegetables_update_Page = async function (req, res) {

  console.log("update view for item " + req.query.id);

  try {

    let result = await Vegetables.findById(req.query.id);

    res.render("VegetableUpdate", {

      title: "Vegetables Update",

      toShow: result,

    });

  } catch (err) {

    res.status(500);

    res.send(`{'error': '${err}'}`);

  }

};



// Handle a delete one view with id from query

exports.vegetables_delete_Page = async function (req, res) {

  console.log("Delete view for id " + req.query.id);

  try {

    result = await Vegetables.findById(req.query.id);

    res.render("VegetableDelete", {

      title: "Vegetables Delete",

      toShow: result,

    });

  } catch (err) {

    res.status(500);

    res.send(`{'error': '${err}'}`);

  }

};

