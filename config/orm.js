
var connection = require("../config/connection.js");

// returns object values such as {burger_name: cheese burger}, as string "burger_name = cheese burger"
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      };
      arr.push(key + "=" + value);
    };
  };
  return arr.toString();
};


var orm = {
	selectAll: function(table, d) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      d(result);
    });
  },
  insertOne: function(table, cols, vals, d) {
    var queryString = "INSERT INTO ?? (??) VALUES (??)";

    connection.query(queryString, [table, cols, vals], function(err, result) {
      if (err) {
        throw err;
      }

      d(result);
    });
  },
  updateOne: function(table, Objvals, condition, d) {
    var queryString = "UPDATE ?? SET ?? WHERE ??";

    connection.query(queryString, [table, objToSql(Objvals), condition], function(err, result) {
      if (err) {
        throw err;
      }

      d(result);
    });
  }
};

module.exports = orm;

// routes(burger_controller)-->models(burger.js)-->ORM--> MYSQL(db)