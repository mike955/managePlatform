'use strict';

import Koa from 'koa';
import views from 'koa-views';
import serve from 'koa-static';

import router from './app/routes/index';

const app = new Koa();

// 注册中间件
app
  .use(views(__dirname + '/app/views', {  //模板引擎设置
    map: { html: 'ejs' }
  }))
  .use(serve(__dirname + '/app/public'))
  .use(router.routes());  //路由设置



app.listen(2017,(err) => {
  if (err) console.log(err);
  console.log("Server starting at 10086")
});
