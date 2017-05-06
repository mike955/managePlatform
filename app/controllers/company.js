'use strict';

import Company from '../models/company';

//main
exports.main = async function(ctx, next){
  await ctx.render('pages/Company/main', {   //默认后缀名为html
   title: '公司信息'
 })
}
