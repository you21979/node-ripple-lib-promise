var Promise = require('bluebird');

var createTransaction = function(remote, secret, f){
    return new Promise(function(resolve, reject) {
        var transaction = remote.transaction();
        transaction.setSecret(secret);
        f(transaction, function(err){
            if(err) return reject(err);
            transaction.submit(function(err, res) {
                if(err) reject(err);
                else resolve(res);
            });
        });
    })
}

var createRequest = exports.createRequest = function(f){
    return new Promise(function(resolve, reject) {
        var request = f();
        request.on('success', function(data){
            resolve(data);
        });
        request.on('error', function(err){
            reject(err);
        });
        request.request();
    });
}

