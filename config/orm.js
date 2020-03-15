var connection = require ('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  };

  function objToSql(object) {
      var arr = [];
      for (var key in object) {
          var value = object[key];
          if (Object.hasOwnProperty.call (object, key)){
                if (typeof value === 'string' && value.indexOf (" ") >= 0) {
                    value = `'${value}'`;
                }
                arr.push(`${key}=${value}`);
            }
        } 
  }

var orm = {
    selectAll: function (tableInput, cb){ 
        var queryString = `SELECT * from ${tableInput};`;
        connection.query(queryString, function(err, result){
            if (err) throw (err);
            cb(result);
        })
    },
    insertOne: function (table, cols, vals, cd){
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result){
            if (err) throw (err);
            cd(result);
        })
    },

    updateOne: function(table, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET devoured = true WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result){
            if (err) throw (err);
            cb(result);
        })
    }


};

module.exports = orm;