var express = require("express");
const vegetables_controller = require("../controllers/Vegetables");
var router = express.Router();

// const secured = (req, res, next) => {
//  if (req.user){
//  return next();
//  }
//  req.session.returnTo = req.originalUrl;
//  res.redirect("/login");
//  }

/* GET flowers */
router.get("/", vegetables_controller.vegetables_view_all_Page);

// GET request for one flower.
router.get("/Vegetables/:id", vegetables_controller.vegetables_detail);

/* GET detail costume page */
router.get("/detail", vegetables_controller.vegetables_view_one_Page);

/* GET create costume page */
router.get("/create", vegetables_controller.vegetables_create_Page);

/* GET create update page */
router.get("/update", vegetables_controller.vegetables_update_Page);

/* GET delete costume page */
router.get("/delete", vegetables_controller.vegetables_delete_Page);

module.exports = router;
