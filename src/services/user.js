const userModel = require("../models/user");
const { generatePageCondition, standardizePageData } = require("../utils/tool");

const user = {
  // 登录
  async login(data) {
    let result = userModel.getOneByAccountAndPassword({
      account: data.account,
      password: data.password,
    });
    return result;
  },

  // 获取用户信息
  async getUserInfoById(id) {
    let result = userModel.getUserInfoById(id);
    return result;
  },

  // 判断account是否存在
  async existAccount(account) {
    let result = await userModel.existAccount(account);
    return result ? true : false;
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
};

module.exports = user;
