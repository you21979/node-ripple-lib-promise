var Promise = require('bluebird');

var transferRate = function(book){
    return new Promise(function(resolve, reject) {
        book.requestTransferRate(function(err, res){
            if(err) reject(err);
            else resolve(res);
        });
    })
}
var offers = function(book){
    return new Promise(function(resolve, reject) {
        book.requestOffers(function(err, res){
            if(err) reject(err);
            else resolve(res);
        });
    })
}

var orderBook = exports.orderBook = function(remote, params){
    return new Promise(function(resolve, reject) {
        var book = remote.createOrderBook(params);
        transferRate(book).then(function(res){
            return offers(book)
        }).then(function(res){
            resolve(res);
        }).catch(function(err){
            reject(err);
        })
    });
}

