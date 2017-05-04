'use strict';

module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    use: 'root',
    mpassword: '2017',
    database: '';
    port: 3306
  },
  pool: { //设置数据库连接池数量
    min: 0,
    max: 10
  }
}
