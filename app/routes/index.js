'use strict';

import Router from 'koa-router';

const router = new Router();

router
  .get('/', async (ctx, next) => {  //主页面
      await ctx.render('index', {   //默认后缀名为html
        title: 'managePlatform'
      })
  })
  .get('/login', async (ctx, next) => {  //登录页面
      await ctx.render('pages/user/login', {
        title: '用户登录'
      })
  })
  .get('/register', async (ctx, next) => {  //登录页面
      await ctx.render('pages/user/register', {
        title: '用户注册'
      })
  })
  .post('/login', async (ctx, next) => {
    ctx.body = ctx.request.body;
    console.log(ctx.body);
  })


export default router;
