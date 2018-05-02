
var orm = require("../config/orm.js");

var burger = {

  selectAll: function(d) {
    orm.selectAll("burgers", function(res) {
      d(res);
    });
  },
  insertOne: function(cols, vals, d) {
    orm.insertOne("burgers", cols, vals, function(res) {
      d(res);
    });
  },
  updateOne: function(Objvals, devoured, d) {
    orm.updateOne("burgers", Objvals, devoured, function(res) {
      d(res);
    });
  }
  
 };

 module.exports = burger;
