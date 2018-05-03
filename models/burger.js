
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
  updateOne: function(ObjVals, condition, d) {
    orm.updateOne("burgers", ObjVals, condition, function(res) {
      d(res);
    });
  }
  
 };

 module.exports = burger;
