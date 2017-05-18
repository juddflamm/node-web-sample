var http = require("http");

var processUniqueUuid = "xxx".replace(/[xy]/g, function(c) {
  var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
  return v.toString(16);
});

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var body = `
		<html>
		<head>
		<title>Sample NodeJS Webapp</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:200">
		<style>
			body {
				font-family: sans-serif;
				font-weight: 100;
				font-size: 1.125em;
				margin: 0; padding: 0;
			}
			h1, h2, h3, h4, h5, h6 {
				font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
			}
			ul {
				list-style-type: none;
				padding: 0;
			}
			header, section, footer {
				padding: 0 10%;
			}
			header {
				background-color: skyblue;
				overflow:auto;
			}

			header h1 {
				font-size: 2.5em;
				font-weight: 100;
			}

			h2 {
				font-size: 1.5em;
				font-weight: 100;
			}
		</style>
		</head>
		<body>
		<header>
			<h1>Node Web Sample</h1>
		</header>
		
		<section>
			<h2>Served From host</h2>
			${processUniqueUuid}
		</section>

		<section>
			<h2>Headers</h2>
			<ul>
				${listOfHeaders(req.headers)}
			</ul>
		</section>
		<section>
			<h2>ENV</h2>
			<span>${process.env.TOPSECRET}</span>
			${process.env}
		</section>

		</body>
		</html>`;
    res.end(body);
  })
  .listen(80);

function listOfHeaders(headers) {
  let html = "";
  for (var i in headers) {
    html += `<li>${i}: ${headers[i]}</li>\n`;
  }
  return html;
}

console.log("Server running at localhost:80/");
