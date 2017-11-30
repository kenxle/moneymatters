
// Get dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan')
var util = require('util')

// Get our API routes
const api = require('./routes/api');

const app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://moneyapp:Onward&Upward@ds257485.mlab.com:57485/moneymattersmongo';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('debug', (collectionName, method, query, doc) => {
  console.log(`${collectionName}.${method}` + " " + util.inspect(query, false, 20), doc);
});

// var index = require('./routes/index');
// var users = require('./routes/users');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'moneymatters/src', 'favicon.ico')));
// Parsers for POST data
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'moneymatters/dist')));

// Set our api routes
app.use('/api', api);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, '/moneymatters/dist/index.html'));
  console.log("unmatched path");;
  // console.log(res);
  res.send();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log("error: " + err)
  res.send("error: " + err);
});

module.exports = app;
