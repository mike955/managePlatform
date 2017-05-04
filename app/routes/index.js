'use strict';

import Router from 'koa-router';

const router = new Router();

router
  .get('/', async (ctx, next) => {
      await ctx.render('index', {   //handlebars模板引擎文件必须加上后缀名hbs，因为默认后缀名为html
        title: 'managePlatform'
      })
  })


export default router;
