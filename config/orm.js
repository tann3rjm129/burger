
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

// prints question marks
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
	selectAll: function(table, d) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      d(result);
    });
  },
  insertOne: function(table, cols, vals, d) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      d(result);
    });
  },
  updateOne: function(table, ObjVals, condition, d) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(ObjVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      d(result);
    });
  }
};

module.exports = orm;

// routes(burger_controller)-->models(burger.js)-->ORM--> MYSQL(db)