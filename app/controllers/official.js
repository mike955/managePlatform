'use strict';

import Official from '../models/official';

//main
exports.main = async function(ctx, next){
  await ctx.render('pages/official/main', {   //默认后缀名为html
   title: '政府工作人员'
 })
}
