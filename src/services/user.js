const userModel = require('../models/user')

const user = {
  // 登录
  async login(data) {
    let result = userModel.getOneByAccountAndPassword({
      account: data.account,
      password: data.password
    });
    return result
  },

  // 获取用户信息
  async getUserInfoById(id) {
    let result = userModel.getUserInfoById(id);
    return result;
  },

  // 判断account是否存在
  async existAccount(account) {
    let result = await userModel.existAccount(account);
    console.log("result",result);
    return result ? true : false;
  }
}

module.exports = user