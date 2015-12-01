var express = require('express');
var app = express();

app.get('/add/:num1/:num2', function(req, res) {
  var added = Number(req.params.num1) + Number(req.params.num2);
  console.log(typeof added);
  res.send(''+added);


  /* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */
});
// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});