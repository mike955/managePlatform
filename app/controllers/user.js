'use strict';

import User from '../models/user';

//main
exports.index = async function(ctx, next){
  ctx.render('', {});
}

//login
exports.login = async function(ctx, next){
  let user_data = ctx.request.body;
  console.log(user_data);
  User.insert(user_data);
}
