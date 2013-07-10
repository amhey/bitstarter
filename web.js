var express = require('express');

var app = express.createServer(express.logger());

//This is the file reading section
var filetoread="index.html";
var filecontent = fs.readFileSync(index.html,"utf8");

app.get('/', function(request, response) {
  response.send(filecontent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
