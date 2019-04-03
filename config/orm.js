var connection = require("../config/connection.js");

var orm = {
    selectAll: function(nd) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            nd(result)
        });
    },
    insertOne: function(name, dev, nd) {
        var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (?, ?)";

        connection.query(queryString, [name, dev], function(err, result) {
            nd(result);
        })
    },
    updateOne: function(id, nd) {
        var queryString  = "UPDATE burgers SET devoured = true WHERE id = ?";

        connection.query(queryString, [id], function(err,result) {
            nd(result)
        })
    }
}

module.exports = orm;