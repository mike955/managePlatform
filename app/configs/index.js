'use strict';

// 用来挂载development下面配置文件

module.exports = {
  portConfig = require('./development/port').port,
  knexConfig = require('./development/knex.js'),
  redisCOnfig = require('./development/redis.js')
}
