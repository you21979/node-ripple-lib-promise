var _ = require('lodash');
var request = require('./request_promisify');

var offerCreate = exports.offerCreate = function(remote, secret, address, pays, gets, flags, opt){
// cancel_sequence
// expiration
    if(!opt) opt = {};
    return request.createTransaction(remote, secret, function(tx, callback){
        tx.offerCreate(
            _.extend({
                from: address,
                taker_pays: pays,
                taker_gets: gets,
            }, opt)
        );
        tx.setFlags(flags);
        callback(null);
    })
}
var offerCancel = exports.offerCancel = function(remote, secret, address, sequence){
    return request.createTransaction(remote, secret, function(tx, callback){
        tx.offerCancel(
            _.extend({
                from : address,
                sequence : sequence 
            }, {})
        );
        callback(null);
    })
}
var payment = exports.payment = function(remote, secret, address, dest_address, amount, tag){
    return request.createTransaction(remote, secret, function(tx, callback){
        tx.payment(
            _.extend({
                account: address,
                destination: dest_address,
                amount: amount
            }, {})
        );
        if(tag) tx.destinationTag(tag);
        callback(null);
    })
}
var trustSet = exports.trustSet = function(remote, secret, address, limit, opt){
    if(!opt) opt = {};
    return request.createTransaction(remote, secret, function(tx, callback){
        tx.trustSet(
            _.extend({
                account: address,
                limit : limit
            }, opt)
        );
        callback(null);
    })
}

