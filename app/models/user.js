'use strict';

import Knex from 'knex';
import validate from 'validate';
import md5 from 'md5';


import configs from '../configs/index';

const knex = Knex(configs.knexConfig);

export default class User{
  static async insert(req, res) {
    // 判断数据输入

    let new_data = {};
  }
}
