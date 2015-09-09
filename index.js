var express = require('express')
	serveStatic = require('serve-static');

var app = express();

app.use(serveStatic('./'));
app.listen(3000);

console.log('Listening on port 3000');