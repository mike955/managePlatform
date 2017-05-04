# managePlatform
# 这个文件是管理平台说明文档，包括环境部署部署方法、技术方案、需求文档
# 工程目录 https://github.com/zza00000/managePlatform.git

## 环境部署--ubuntu（14.04）

1.nodejs安装--建议安装最新版本

 - 安装方法步骤：https://nodejs.org/en/download/package-manager/
```
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

 - 设置镜像源为淘宝镜像源
```
$ npm config set registry https://registry.npm.taobao.org
$ npm info underscore （如果上面配置正确这个命令会有字符串response）
```

2.mysql安装--5.7版本以上

 - 安装方法步骤：https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/

3.redis安装--安装最新版本

 - 安装方法步骤：https://redis.io/download

## 技术方案
1.技术选型
  - 总计架构使用koa@2+nodejs+mysql+bootstrap来实现
  - koa@2为web框架，nodejs为服务器，mysql为数据库，bootstrap为前端界面框架

2.代码提交审核
  - 使用git提交代码

3.代码要求
  - 代码统一使用ES6进行编写
  - 所有接口需要编写测试代码
  - 所有文件需要使用严格模式编写
  - 每一个函数、类、方法都需要写上说明，说明是用来进行说明操作的

4.中间件说明
  - MySQL使用knex中间件进行操作
  - 缓存使用redis数据库进行缓存

5.端口说明
  - 2017

6.代码部署
  - 使用pm2进行代码部署

## 需求文档


## 其他说明

 - npm包网站：http://npmjs.org/
 - github网站：http://github.com/
 - nodejs官网：https://nodejs.org/en/


## 目录工程说明
