var _ = require('lodash');
var Promise = require('bluebird');
var Remote = require('ripple-lib').Remote;

var publicRippleServers = function(){
    return [
         {
            host: 's1.ripple.com' , port: 443 , secure: true
         },
         {
            host: 's-west.ripple.com' , port: 443 , secure: true
         },
         {
            host: 's-east.ripple.com' , port: 443 , secure: true
         }
    ];
}

var getPublicServer = exports.getPublicServer = function(){
    var servers = publicRippleServers();
    var idx = Math.floor(Math.random()*servers.length);
    return servers[idx];
}

var createRemote = module.createRemote = function(servers, opt){
// trace:   true,
// fee_cushion:     1.5,
    if(!(servers instanceof Array)) servers = [servers];
    return new Remote(
        _.extend({
            max_listeners:  1024,
            local_fee:      true,
            trusted:        true,
            local_signing:  true,
            servers:        servers,
        }, opt)
    );
}

var connect = exports.connect = function(remote, timeout_sec){
    var TIMEOUT_SEC = (timeout_sec || 10) * 1000;
    return new Promise(function(resolve, reject){
        var to = setTimeout(function(){
            remote.disconnect();
            reject(new Error('timeout'));
        }, TIMEOUT_SEC);
        remote.connect(function(){
            clearTimeout(to);
            resolve(remote);
        })
    });
}

var createConnect = exports.createConnect = function(timeout_sec){
    return connect(createRemote(getPublicServer()), timeout_sec)
}


