var express = require('express');
var app = express();

var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    emails: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
    ]
  },
  2: {
    firstName: "Steve",
    lastName: "whatever",
    emails: [{type:'home', address: 'home@home.home'}]
  }
};



app.get('/entry/:id', function (req, res) {
  var num = req.params.id;
  console.log(num);
  var answer = entries[num];
  res.json(answer);
  console.log(answer);
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
