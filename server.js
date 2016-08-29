
// require our dependencies
var express = require('express');
var app = express();
var port = 8080;

// route our app
var router = require('./app/routes');
app.use('/', router);


// start the server
app.listen(port, function() {
  console.log('app started');
});

