const { query, filterByPage, count, insert, logicDeleteById } = require("../utils/db-util");
const { stringifySqlField, generateInsertData, underline2LowerCamelCase, lowerCamelCase2Underline } = require("../utils/tool");

const userField = [
  "id",
  "account",
  "realname",
  "email",
  "phone",
  "profile_photo",
  "sex",
  "status",
];

const user = {
  // 根据用户账号获取用户信息，包括密码
  async getUserInfoWithPasswordByAccount(account) {
    const sql = `SELECT ${stringifySqlField(
      [...userField, 'password'],
      false
    )} FROM user WHERE account = '${account}'`;
    let result = await query(sql);
    if (Array.isArray(result) && result.length > 0) {
      result = underline2LowerCamelCase(result[0]);
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
      result = underline2LowerCamelCase(result[0]);
    } else {
      result = null;
    }
    return result;
  },

  // 判断account是否存在
  async existAccount(account) {
    const sql = `SELECT account FROM user where account = '${account}'`;
    let result = await query(sql);
    return Array.isArray(result) && result.length > 0
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
      records: underline2LowerCamelCase(records),
    };
  },

  // 新增用户
  async insertUser(info) {
    info = lowerCamelCase2Underline(info);
    const insertField = ['account', 'password', 'realname', 'email', 'phone', 'profile_photo', 'sex', 'create_by', 'create_date_time', 'update_by', 'update_date_time']
    let result = await insert('user', generateInsertData(insertField, info));
    return result
  },
  
  // 删除用户
  async deleteOneUser(id) {
    let result = await logicDeleteById('user', id)
    return result
  }
};

module.exports = user;
