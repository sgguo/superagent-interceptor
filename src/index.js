// var request = require('superagent');

// for end.
function endInterceptor() {
    var callbacks = Array.prototype.slice.call(arguments);
    return function (request) {
        var callback = request.callback;
        request.callback = function (err, res) {
            callbacks.forEach(function (e) { e.call(request, err, res); });
            callback.call(request, err, res);
        };
    };
}

// for before send.
function beforeSendInterceptor() {
    var callbacks = Array.prototype.slice.call(arguments);
    return function (request) {
        var end = request.end;
        request.end = function (cb) {
            callbacks.forEach(function (e) { e.call(request, request); });

            return end.call(request, cb);
        };
    };
}

module.exports = { endInterceptor, beforeSendInterceptor }