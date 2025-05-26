var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  var data = {
    title: "Welcome to our website"
  };
  res.send(data);
});

var server = app.listen(3000, function () {
  console.log("App is running on http://localhost:3000");
});
