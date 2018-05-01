
var orm = require("../config/orm.js");

var burgers = {

  all: function(d) {
    orm.all("burgers", function(res) {
      d(res);
    });
  },
  create: function(cols, vals, d) {
    orm.create("bugers", cols, vals, function(res) {
      d(res);
    });
  },
  update: function(col, newValue, originalValue, d) {
    orm.update("burgers", col, newValue, originalValue, function(res) {
      d(res);
    });
  }
  
 };

 module.exports = burgers;
