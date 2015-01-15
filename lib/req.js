var _ = require('lodash');
var request = require('./request_promisify');

// --------------------------------------------------------------
// etc
// --------------------------------------------------------------

var serverInfo = exports.serverInfo = function(remote){
    return request.createRequest(function(){
        return remote.requestServerInfo()
    })
}

var ping = exports.ping = function(remote){
    return request.createRequest(function(){
        return remote.requestPing()
    })
}

var ping = exports.ping = function(remote){
    return request.createRequest(function(){
        return remote.requestPing()
    })
}

var rippleBalance = exports.rippleBalance = function(account, issuer, currency, ledger){
    return request.createRequest(function(){
        return remote.requestRippleBalance(account, issuer, currency, ledger)
    })
}
var ripplePathFind = exports.ripplePathFind = function(remote, src_account, dst_account, dst_amount, src_currencies){
    return request.createRequest(function(){
        return remote.requestRipplePathFind(src_account, dst_account, dst_amount, src_currencies)
    })
}
var pathFindCreate = exports.pathFindCreate = function(remote, src_account, dst_account, dst_amount, src_currencies){
    return request.createRequest(function(){
        return remote.requestPathFindCreate(src_account, dst_account, dst_amount, src_currencies)
    })
}
var pathFindClose = exports.pathFindClose = function(remote){
    return request.createRequest(function(){
        return remote.requestPathFindClose()
    })
}

var bookOffers = exports.bookOffers = function(remote, gets, pays, taker){
    return request.createRequest(function(){
        return remote.requestBookOffers(gets, pays, taker)
    })
}

// --------------------------------------------------------------
// ledger
// --------------------------------------------------------------

// XXX This is a bad command. Some variants don't scale.
// XXX Require the server to be trusted.
var ledger = exports.ledger = function(remote, options){
    return request.createRequest(function(){
        return remote.requestLedger(options)
    })
}
var ledgerClosed = exports.ledgerClosed = function(remote){
    return request.createRequest(function(){
        return remote.requestLedgerClosed()
    })
}
var ledgerHeader = exports.ledgerHeader = function(remote){
    return request.createRequest(function(){
        return remote.requestLedgerHeader()
    })
}
var ledgerCurrent = exports.ledgerCurrent = function(remote){
    return request.createRequest(function(){
        return remote.requestLedgerCurrent()
    })
}
var ledgerEntry = exports.ledgerEntry = function(remote, type){
    return request.createRequest(function(){
        return remote.requestLedgerEntry(type)
    })
}

// --------------------------------------------------------------
// transaction
// --------------------------------------------------------------

var transactionEntry = exports.transactionEntry = function(remote, hash, ledgerHash){
    return request.createRequest(function(){
        return remote.requestTransactionEntry(hash, ledgerHash)
    })
}
var transaction = exports.transaction = function(remote, hash){
    return request.createRequest(function(){
        return remote.requestTransaction(hash)
    })
}
var transactionHistory = exports.transactionHistory = function(remote, start){
    return request.createRequest(function(){
        return remote.requestTransactionHistory(start)
    })
}

// --------------------------------------------------------------
// account
// --------------------------------------------------------------


var accountOffers = exports.accountOffers = function(remote, address){
    return request.createRequest(function(){
        return remote.requestAccountOffers(_.extend({
            account : address,
        }, {}))
    })
}
var accountCurrencies = exports.accountCurrencies = function(remote, address){
    return request.createRequest(function(){
        return remote.requestAccountCurrencies(_.extend({
            account : address,
        }, {}))
    })
}
var accountBalance = exports.accountBalance = function(remote, address){
    return request.createRequest(function(){
        return remote.requestAccountBalance(_.extend({
            account : address,
        }, {}))
    })
}

var accountLines = exports.accountLines = function(remote, address, opt){
    if(!opt) opt = {};
    return request.createRequest(function(){
        return remote.requestAccountLines(_.extend({
            account : address,
        }, opt));
    })
}
var accountInfo = exports.accountInfo = function(remote, address){
    return request.createRequest(function(){
        return remote.requestAccountInfo(_.extend({
            account : address,
        }, {}))
    })
}
var accountTransactions = exports.accountTransactions = function(remote, address, opt){
    if(!opt) opt = {};
    return request.createRequest(function(){
        return remote.requestAccountTransactions(_.extend({
            account : address,
        }, opt))
    })
}

