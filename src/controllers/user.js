const jwt = require("jsonwebtoken");
const secret = require("../utils/secret-key");
const { INIT_PASSWORD } = require('../config/const')
const { getBcryptHash, compareBcrypt } = require('../utils/bcrypt')
const userService = require("../services/user");

const user = {
  // 登录
  async login(ctx) {
    const { account, password } = ctx.request.body;
    // account存在，判断密码是否正确
    let result = await userService.login(account);
    if (result) {
      // 比较密码是否一致
      const isSame = await compareBcrypt(password, result.password);
      if(isSame) {
        const token = jwt.sign({ userId: result.id, account: result.account, realname: result.realname }, secret);
        result.token = `Bearer ${token}`;
        delete result.password
        ctx.body = result;
      }else {
        ctx.throw(500, "密码不正确");
      }
    } else {
      ctx.throw(500, "用户不存在");
    }
  },

  // 根据token获取用户信息
  async getUserInfo(ctx) {
    const { userId } = ctx.state.user;
    let result = await userService.getUserInfoById(userId);
    if (result) {
      ctx.body = result;
    } else {
      ctx.throw(401, "用户不存在，请重新登录");
    }
  },

  // 获取用户分页列表
  async getUserPage(ctx) {
    const { account, realname, orderBy, isAsc, pageNo, pageSize } = ctx.query;
    let result = await userService.page({
      account,
      realname,
      orderBy,
      isAsc,
      pageNo,
      pageSize,
    });
    ctx.body = result;
  },

  // 添加用户
  async addUser(ctx) {
    const { account, realname } = ctx.request.body;
    const createInfo = ctx.state.createInfo;
    const exist = await userService.existAccount(account);
    if(exist) {
      ctx.throw(500, '账号已存在，请重新输入')
      return;
    }
    // hash密码
    const hashPwd = await getBcryptHash(INIT_PASSWORD)
    let result = await userService.addUser({ account, realname, password: hashPwd }, createInfo)
    ctx.body = result;
  },


  // 删除某用户
  async deleteUserById(ctx) {
    const id = ctx.params.id;
    const updateInfo = ctx.state.updateInfo;
    let result = await userService.deleteUserById(id, updateInfo)
    ctx.body = result;
  },

  // 更新用户信息
  async updateUser(ctx) {
    const body = ctx.request.body;
    const { id, account } = body;
    if(!id) {
      ctx.throw(500, '用户id为空')
      return;
    }
    const exist = await userService.existAccount(account, id);
    if(exist) {
      ctx.throw(500, '账号已存在，请重新输入')
      return;
    }
    const updateInfo = ctx.state.updateInfo;
    let result = await userService.updateUser(body, updateInfo)
    ctx.body = result;
  }
};

module.exports = user;
