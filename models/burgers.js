let orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insert: function(burgerName, cb) {
        orm.insert(burgerName, function(res) {
            cb(res);
        });
    },
    update: function(id, cb) {
        orm.update(id, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;