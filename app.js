// ~/Applications/myFirstAppli/app.js
var express = require("express"),
    app = express(),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    fs = require('fs'),
    port = parseInt(process.env.PORT, 10) || 8080;

app.set('views', __dirname + '/www');
app.use(morgan('combined'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(__dirname +'/www'));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));
