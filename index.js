var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var entries = [{firstName:'steve', lastName:'smith'},{firstName:'john', lastName:'doe'}];

app.use(bodyParser.json())

app.get('/', function (req, res) {
  var returning = [];
  for (var i = 0; i < entries.length; i++){
    if(req.query.name === entries[i].firstName || req.query.name === entries[i].lastName){
      returning.push(entries[i]);
      console.log(returning);
    }
  }
  res.json(returning);
});


app.post('/entries', function(req, res){
  console.log(req.body);
  res.json(req.body);
});

var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
