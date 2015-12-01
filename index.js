var express = require('express');
var app = express();

var entries = [{firstName:'steve', lastName:'smith'},{firstName:'john', lastName:'doe'}];

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

var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
