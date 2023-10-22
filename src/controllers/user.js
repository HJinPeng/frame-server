const jwt = require('jsonwebtoken')
const secret = require('../utils/secret-key')
const userService = require('../services/user')

const user = {
  async login(ctx) {
    const body = ctx.request.body;
    let result = await userService.login(body);
    if(result) {
      const token = jwt.sign({account: result.account}, secret)
      result.token = token;
      ctx.body = result;
    }else {
      ctx.throw(500, '用户不存在')
    }
  },

  async getUserInfo(ctx) {
    console.log(ctx);
    ctx.body = '122'
  }
}

module.exports = user