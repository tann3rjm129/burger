
var connection = require("./connection.js");

// Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ''burgers'' at line 1

var orm = {
	all: function(table) {
    var queryString = "SELECT * FROM ?";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      return result;
    });
  },
  create: function(table, cols, vals) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";

    connection.query(queryString, [table, cols, vals], function(err, result) {
      if (err) {
        throw err;
      }

      return result;
    });
  },
  update: function(table, col, newValue, originalValue) {
    var queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ?";

    connection.query(queryString, [table, col, newValue, col, originalValue], function(err, result) {
      if (err) {
        throw err;
      }

      return result;
    });
  }
};

module.exports = orm;
