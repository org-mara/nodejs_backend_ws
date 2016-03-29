'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing
var config = require('/etc/nodejs-config/mara').ws;

SwaggerExpress.create({
  appRoot: __dirname // required config
}, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  //var port = process.env.PORT || 10010;
  app.listen(config.port);

});
