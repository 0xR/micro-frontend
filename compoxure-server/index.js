'use strict';

var cx = require('compoxure');
var config = require('./config.json');
var connect = require('connect');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

function createEventHandler() {
  return {
    logger: function(level, message) {
      if(process.env.logging !== 'false') { console.log('LOG ' + level + ': ' + message); }
    },
    stats: function(type, key, value) {
      if(process.env.logging !== 'false') { console.log('STAT ' + type + ' for ' + key + ' | ' + value); }
    }
  }
}
var cxEventHandler = createEventHandler();

config.environment = process.env.NODE_ENV || 'development';
config.minified = config.environment !== 'development';

var compoxureMiddleware = cx(config, cxEventHandler);

var server = connect();
server.use(cookieParser());
if(process.env.logging !== 'false') { server.use(morgan('combined')); }
server.use(compoxureMiddleware);

server.listen(5050, 'localhost', function() {
  console.log('Example compoxure server on http://localhost:5050');
});


