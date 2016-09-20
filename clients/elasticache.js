require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elasticache'] = {};
AWS.ElastiCache = Service.defineService('elasticache', ['2015-02-02']);
Object.defineProperty(apiLoader.services['elasticache'], '2015-02-02', {
  get: function get() {
    var model = require('../apis/elasticache-2015-02-02.min.json');
    model.paginators = require('../apis/elasticache-2015-02-02.paginators.json').pagination;
    model.waiters = require('../apis/elasticache-2015-02-02.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ElastiCache;
