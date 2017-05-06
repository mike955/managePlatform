'use strict';

import Individual from '../models/individual';

//main
exports.main = async function(ctx, next){
  await ctx.render('pages/individual/main', {   //默认后缀名为html
   title: '个人信息'
 })
}
