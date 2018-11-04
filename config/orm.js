var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, ["burgers"], function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insert: function(burgerName, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, ["burgers", "burger_name", burgerName], function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    update: function(id, cb) {
        let queryString = "UPDATE ?? SET ?? = TRUE WHERE ?? = ?"
        connection.query(queryString, ["burgers", "devoured", "id", id], function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
}

module.exports = orm;