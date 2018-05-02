var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {

    res.json({ id: result.insertId });

  });
});

router.put("/api/burgers/:id", function(req, res) {
  // condition
  var burgerId = "id = " + req.params.id;

  burger.updateOne({
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