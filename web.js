var express = require('express');

var app = express.createServer(express.logger());
var filecontent = "This is in my file";

app.get('/', function(request, response) {
  response.send(filecontent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
