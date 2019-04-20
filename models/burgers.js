var orm = require('../config/orm.js');

var burgers = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res)
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne(cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(id, cb) {
        orm.updateOne(id, function(res) {
            console.log('here' + res);
            cb(res);
        });
    }
};

module.exports = burgers;