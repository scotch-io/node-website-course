// // import the http module
// var http = require('http');

// // handle sending requests and returning responses
// function handleRequests(req, res) {
//   // return string
//   res.end('Hello world!');
// }

// // create the server
// var server = http.createServer(handleRequests);

// // start server and listen on port x
// server.listen(8080, function() {
//   console.log('Listening on port 8080');
// });



/////////////// EXPRESS //////////////////////


var express = require('express');
var app = express();
var port = 8080;

// start the server
app.listen(port, function() {
  console.log('app started');
});

// route our app
app.get('/', function(req, res) {
  res.send('hello world again!');
});