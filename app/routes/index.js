'use strict';

import Router from 'koa-router';

import User from '../controllers/user';
import Individual from '../controllers/individual';
import Company from '../controllers/company';
import Official from '../controllers/official';

const router = new Router();

router
  .get('/', User.index)                 //主页面
  .get('/login', User.showLogin)        //登录页面
  .get('/register', User.showRegister)  //注册页面
  .get('/logout', User.logout)          //用户退出登录
  .post('/login', User.login)           //用户登录操作
  .post('/register', User.register)     //用户注册操作
  .get('/individual/main', Individual.main)   //个人主页面
  .get('/company/main', Company.main)         //企业主页面
  .get('/official/main', Official.main)       //政府工作人员主页面

  //政府人员路由
  .get('/official/diary', Official.diary)  //办公
  .get('/official/project', Official.project)
  .get('/official/publicMessage', Official.publicMessage)
export default router;
