var http = require('http');

var processUniqueUuid = 'xxx'.replace(/[xy]/g, function(c) {
	var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	return v.toString(16);
});

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var body = `
		<html>
		<head>
		<title>Sample NodeJS Webapp</title>
		<style>
			html{background-color:#FFF;min-height:100%}
			body{margin:0}
			body,input,select,textarea{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-size:16pt;box-sizing:border-box;color:#e6ffff;-webkit-font-smoothing:antialiased}
			a{color:#6fc3df}
			.monospace{font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}
			.hidden,.hide-until-load{visibility:hidden}
			.container{display:block}

			.site-heading {
				background-color: skyblue;
				color: rgb(0, 0, 0);
				text-align: center;
				display: flex;
				flex-direction: column;
				padding: 0.5em;
				margin: 0px;
			}
			
			.site-heading span{display:flex;align-items:center;justify-content:center}
			.site-heading h1{font-size:200%;margin:.3em 0 .5em .5em;letter-spacing:0;font-weight:200}
			.site-heading img.logo{display:none}
		</style>
		</head>
		<body>
		<heading class="site-heading">
			<div class="container">
				<span>
				<h1>Served From host: ${processUniqueUuid}</h1>
				</span>
			</div>
		</heading>
		<hr>
		<h4>Headers<h4>
		<ul>
		${listOfHeaders(req.headers)}
		</ul>
		</body>
		</html>`;
	res.end(body);
}).listen(80);

function listOfHeaders(headers) {
	let html = "";
	for (var i in headers) {
		html += (`<li><strong>${i}</strong> - ${headers[i]}</li>\n`);
	}
	return html;
}

console.log('Server running at localhost:80/');
