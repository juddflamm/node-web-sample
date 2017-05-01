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
		<link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/pure-min.css" integrity="sha384-UQiGfs9ICog+LwheBSRCt1o5cbyKIHbwjWscjemyBMT9YCUMZffs6UqUTd0hObXD" crossorigin="anonymous">
		<style>
			html{background-color:#FFF;min-height:100%}
			body{margin:0}
			body,input,select,textarea{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-size:16pt;box-sizing:border-box;color:#000;-webkit-font-smoothing:antialiased}

			.container {
				width: 92%;
				margin: 0 auto;
				display: flex;
				flex-direction: column;
			}

			.site-heading .container {
				justify-content: space-between;
				flex-direction: row;
				align-items: center;
			}

			.site-heading {
				background-color: skyblue;
				color: rgb(0, 0, 0);
				text-align: center;
				display: flex;
				flex-direction: column;
				padding: 0.5em;
				margin: 0px;
			}

			.site-heading span{
				display:flex;
				align-items:center;
				justify-content:center
			}

			.site-heading img.logo {
				height: 70px;
				display: flex;
			}

			.site-heading h1 {
				font-size: 200%;
				margin: .3em 0 .5em .5em;
				letter-spacing: 0;
				font-weight: 200;
			}

			h4 {
				font-size: 120%;
				margin: .3em 0 .5em .5em;
				letter-spacing: 0;
				font-weight: 200;
			}
		</style>
		</head>
		<body>
		<heading class="site-heading">
			<div class="container">
				<span>
				<h1>Node Web Sample</h1>
				</span>
			</div>
		</heading>
		<div class="container">
			<h4>Served From host</h4>
			<p>
			${processUniqueUuid}
			</p>

			<h4>Headers</h4>
			<ul>
			${listOfHeaders(req.headers)}
			</ul>
		</div>
		</body>
		</html>`;
	res.end(body);
}).listen(80);

function listOfHeaders(headers) {
	let html = "";
	for (var i in headers) {
		html += (`<li><strong>${i}</strong> ${headers[i]}</li>\n`);
	}
	return html;
}

console.log('Server running at localhost:80/');
