'use strict';

import Company from '../models/company';

//main
exports.main = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/main', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
