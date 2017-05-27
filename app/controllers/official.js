'use strict';

import Official from '../models/official';

//main
exports.main = async function(ctx, next){

  //console.log(ctx.session.user);
  //先判断用户是否登录
  if(!ctx.session.user) {
    //console.log(222)
    await ctx.redirect('/login');
  } else {
    console.log(ctx.session)
    await ctx.render('pages/official/main', {   //默认后缀名为html
     title: '政府工作人员',
     user: ctx.session.user
   })
  }
}


//diary
exports.diary = async function(ctx, next) {

  //console.log(ctx.session.user);
  //先判断用户是否登录
  console.log(ctx.session)
  if(!ctx.session.user) {
    //console.log(222)
    await ctx.redirect('/login');
  } else {
    await ctx.render('pages/official/diary', {   //默认后缀名为html
     title: '政府工作人员',
     user: ctx.session.user
   })
  }
}

//project
exports.project = async function(ctx, next) {

  //console.log(ctx.session.user);
  //先判断用户是否登录
  console.log(ctx.session)
  if(!ctx.session.user) {
    //console.log(222)
    await ctx.redirect('/login');
  } else {
    await ctx.render('pages/official/project', {   //默认后缀名为html
     title: '政府工作人员',
     user: ctx.session.user
   })
  }
}
//publicMessage
exports.publicMessage = async function(ctx, next) {

  //console.log(ctx.session.user);
  //先判断用户是否登录
  console.log(ctx.session)
  if(!ctx.session.user) {
    //console.log(222)
    await ctx.redirect('/login');
  } else {
    await ctx.render('pages/official/publicMessage', {   //默认后缀名为html
     title: '政府工作人员',
     user: ctx.session.user
   })
  }
}
