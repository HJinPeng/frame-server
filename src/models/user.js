const { query } = require('../utils/db-util')

const user = {
  // 通过账号密码查找用户是否存在
  async getOneByAccountAndPassword(model) {
    const sql = `SELECT id, account, realname, email, phone, profilePhoto, sex, status FROM user WHERE account = '${model.account}' AND password = '${model.password}'  LIMIT 1`
    let result = await query(sql)
    if(Array.isArray(result) && result.length > 0) {
      result = result[0]
    }else {
      result = null;
    }
    return result
  },

  // 根据用户id获取用户信息
  async getUserInfoById(id) {
    const sql = `SELECT account, realname, email, phone, profilePhoto, sex, status FROM user WHERE id = ${id}`
    let result = await query(sql);
    if(Array.isArray(result) && result.length > 0) {
      result = result[0]
    }else {
      result = null;
    }
    return result
  },

  // 判断account是否存在
  async existAccount(account) {
    const sql = `SELECT account FROM user where account = '${account}'`
    let result = await query(sql);
    if(Array.isArray(result) && result.length > 0) {
      result = result[0]
    }else {
      result = null;
    }
    return result 
  }
}

module.exports = user