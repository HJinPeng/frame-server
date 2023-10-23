const jwt = require('jsonwebtoken')
const secret = require('../utils/secret-key')
const userService = require('../services/user')

const user = {
  // 登录
  async login(ctx) {
    const { account, password } = ctx.request.body;
    const exist = await userService.existAccount(account);
    console.log("exist", exist);
    // account不存在
    if(!exist) {
      ctx.throw(500, '用户不存在')
    }

    // account存在，判断密码是否正确
    let result = await userService.login({ account, password });
    if(result) {
      const token = jwt.sign({userId: result.id}, secret)
      result.token = `Bearer ${token}`
      ctx.body = result
    }else {
      ctx.throw(500, '密码不正确')
    }
  },

  // 根据token获取用户信息
  async getUserInfo(ctx) {
    const { userId } = ctx.state.user
    console.log("userId", userId)
    let result = await userService.getUserInfoById(userId);
    if(result) {
      ctx.body = result;
    }else {
      ctx.throw(401, '用户不存在，请重新登录')
    }
  }
}

module.exports = user