module.exports = function (url, user, pass) {
    var module = {};

    var restify = require('restify');

	var client = restify.createJsonClient({
	  url: url
	});

	client.basicAuth(user, pass);

    module.updateTemperature = function (json, callback) {
		client.post('/temperature', json, function(err, req, res, obj) {
			handleResponse(err, res);
			callback(err, res);
		});
	}

	function handleResponse(err, res) {
		if (res) {
			console.log('[API] HTTP Status %d -> %s', res.statusCode, res.body);
		} else if (err) {
			console.error('[API] %s', err);
		}
	}

    return module;
}