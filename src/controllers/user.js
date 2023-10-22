const userService = require('../services/user')

const user = {
  async login(ctx) {
    const body = ctx.request.body;
    let result = await userService.login(body);
    if(result) {
      ctx.body = result;
    }else {
      ctx.throw(500, '用户不存在')
    }
  }
}

module.exports = user