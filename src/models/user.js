const { query, filterByPage, count } = require("../utils/db-util");
const { stringifySqlField } = require("../utils/tool");

const userField = [
  "id",
  "account",
  "realname",
  "email",
  "phone",
  "profilePhoto",
  "sex",
  "status",
];

const user = {
  // 通过账号密码查找用户是否存在
  async getOneByAccountAndPassword(model) {
    const sql = `SELECT ${stringifySqlField(
      userField,
      false
    )} FROM user WHERE account = '${model.account}' AND password = '${
      model.password
    }'  LIMIT 1`;
    let result = await query(sql);
    if (Array.isArray(result) && result.length > 0) {
      result = result[0];
    } else {
      result = null;
    }
    return result;
  },

  // 根据用户id获取用户信息
  async getUserInfoById(id) {
    const sql = `SELECT ${stringifySqlField(
      userField,
      false
    )} FROM user WHERE id = ${id}`;
    let result = await query(sql);
    if (Array.isArray(result) && result.length > 0) {
      result = result[0];
    } else {
      result = null;
    }
    return result;
  },

  // 判断account是否存在
  async existAccount(account) {
    const sql = `SELECT account FROM user where account = '${account}'`;
    let result = await query(sql);
    if (Array.isArray(result) && result.length > 0) {
      result = result[0];
    } else {
      result = null;
    }
    return result;
  },

  // 查询 start 到 end 范围的符合条件的用户
  async page(condition) {
    const total = await count("user", condition.where);
    let records = await filterByPage(
      "user",
      stringifySqlField(userField),
      condition
    );
    return {
      total,
      records,
    };
  },
};

module.exports = user;
