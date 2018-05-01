var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var object = {
      burgers: data
    };
    console.log(object);
    res.render("index", object);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {

    res.json({ id: result.insertId });

  });
});

router.put("/api/burgers/:id", function(req, res) {
  var burgerId = req.params.id;

  cat.update({
    devoured: req.body.devoured
  }, burgerId, function(result) {
    if (result.changedRows == 0) {

      return res.status(404).end();

    } else {

      res.status(200).end();

    }
  });
});


module.exports = router;