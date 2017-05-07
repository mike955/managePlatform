'use strict';

import Individual from '../models/individual';

//main
exports.main = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/main', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
