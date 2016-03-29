var config = require('/etc/nodejs-config/mara').ws;
var request = require('request');

var backend = config.cendra;

module.exports = {
  docRead: function(req, res) {
    request({method: req.method, url: backend+'/'+req.swagger.params.id.value}, function(error, response, body) {
      res.set(response.headers)
      res.status(response.statusCode).send(body);
    })
  },
  docList: function(req, res) {
    request({method: req.method, url: backend}, function(error, response, body) {
      res.set(response.headers)
      res.status(response.statusCode).send(body);
    })
  }
}
