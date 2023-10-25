const userModel = require("../models/user");
const { generatePageCondition, standardizePageData } = require("../utils/tool");

const user = {
  // 登录
  async login(account) {
    let result = await userModel.getUserInfoWithPasswordByAccount(account);
    return result;
  },

  // 获取用户信息
  async getUserInfoById(id) {
    let result = await userModel.getUserInfoById(id);
    return result;
  },

  // 判断account是否存在
  async existAccount(account) {
    let result = await userModel.existAccount(account);
    return result;
  },

  // 根据分页参数获取
  async page({ account, realname, orderBy, isAsc, pageNo, pageSize }) {
    const condition = generatePageCondition({
      orderBy,
      isAsc,
      pageNo,
      pageSize,
      filters: [
        { key: "account", value: account, operator: "LIKE" },
        { key: "realname", value: realname, operator: "LIKE" },
      ],
    });
    const { records, total } = await userModel.page(condition);
    return standardizePageData({ pageNo, pageSize, records, total });
  },

  // 新增用户
  async addUser({account, realname, password, createBy}) {
    await userModel.insertUser({account, realname, password, createBy });
    return '新增成功'
  },

  // 通过id删除用户
  async deleteUserById(id) {
    await userModel.deleteOneUser(id);
    return '删除成功'
  }
};

module.exports = user;
