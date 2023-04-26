var express = require("express");
const vegetables_controller = require("../controllers/Vegetables");
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET vegetables */
router.get("/", vegetables_controller.vegetables_view_all_Page);

// GET request for one vegetables.
// router.get("/Vegetables/:id", vegetables_controller.vegetables_detail);

/* GET detail vegetables page */
router.get("/detail", vegetables_controller.vegetables_view_one_Page);

/* GET create vegetables page */
router.get("/create",secured, vegetables_controller.vegetables_create_Page);

/* GET create update page */
router.get("/update", secured ,vegetables_controller.vegetables_update_Page);

/* GET delete vegetables page */
router.get("/delete",secured, vegetables_controller.vegetables_delete_Page);

module.exports = router;
