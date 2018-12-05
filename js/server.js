var express = require('express')
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var serveStatic = require('serve-static');
var calendarer = require('./custom/index-two');
 
var app = express()
 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(serveStatic('./', {'index': ['index.htm']}))

app.post('/SendData', function (req, res) {
  res.send(req.body);
  calendarer.start(req.body);
  console.log(req.body);
})
app.listen(1339)