var fs = require('fs');
var express = require('express');

//var app = express.createServer(express.logger());
var app = express(express.logger());

var outbuf = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(outbuf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
