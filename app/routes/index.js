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
  //个人用户路由
  .get('/individual/diary', Individual.diary) //日程管理
  .get('/individual/project', Individual.project) //项目
  .get('/individual/publicMessage', Individual.publicMessage) //信息发布
  .get('/individual/plan', Individual.plan) //规划计划
  .get('/individual/money', Individual.money) //个人财务
  .get('/individual/addressList', Individual.addressList) //通讯录
  .get('/individual/myMessage', Individual.myMessage) //我的信息
  .get('/individual/notion', Individual.notion) //通知公告
  .get('/individual/achievement', Individual.achievement) //我的成果
  .get('/company/main', Company.main)         //企业主页面
  //企业人员路由

  .get('/official/main', Official.main)       //政府工作人员主页面

  //政府人员路由
  .get('/official/diary', Official.diary)  //办公
  .get('/official/project', Official.project) //项目
  .get('/official/publicMessage', Official.publicMessage) //信息发布
  .get('/official/govPurshase', Official.govPurshase) //政府采购
  .get('/official/plan', Official.plan) //规划计划
  .get('/official/flowExamine', Official.flowExamine) //流程审批
  .get('/official/person', Official.person)  //人事信息
  .get('/official/money', Official.money)  //财务信息
  .get('/official/rules', Official.rules) //法律公文
    .get('/official/personWill', Official.personWill) //民意征集
export default router;
