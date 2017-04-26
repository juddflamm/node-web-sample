var http = require('http');

var processUniqueUuid = 'xxx'.replace(/[xy]/g, function(c) {
	var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	return v.toString(16);
});

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var body = '<html><head><title>Sample NodeJS Webapp</title></head><body><h2>Served from Docker Container: '+processUniqueUuid+'</h2>Headers:<ul>';
	for (var i in req.headers) {
		body = body + ('<li>'+i+' - '+req.headers[i]+'</li>');
	}
	body = body + '</ul></body></html>';
	res.end(body);
}).listen(process.env.PORT || 80);

console.log('Server running at localhost:80/');
