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

//diary
exports.diary =  async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/diary', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//project
exports.project = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/project', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//publicMessage
exports.publicMessage = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/publicMessage', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//plan
exports.plan = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/plan', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//money
exports.money = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/money', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//addressList
exports.addressList = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/addressList', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//myMessage
exports.myMessage = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/myMessage', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//notion
exports.notion = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/notion', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//achievement
exports.achievement = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/achievement', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
