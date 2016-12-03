var fs = require('fs');
var config = require('config');
var path = require('path');

exports.createOrderDir = function (id,callback) {
    try {
        fs.mkdirSync(config.get('dataPath')+id);
        callback({status:"ok"});
    } catch (ex) {
        if (ex.code != 'EEXIST') {
            throw ex;
        } else {
            callback({status:"ok"});
        }
    }
};