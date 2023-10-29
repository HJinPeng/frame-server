import { query, filterByPage, count, insert, logicDeleteById, updateById} from "../utils/db-util.js"
import { stringifySqlField, generateInsertData, underline2LowerCamelCase, lowerCamelCase2Underline } from "../utils/tool.js";

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
  async existAccount(account, exceptId) {
    const sql = `SELECT account FROM user where account = '${account}' AND deleted != 1 ${exceptId ? 'AND id != ' + exceptId : ''}`;
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
  async insertUser(data, createInfo) {
    data = lowerCamelCase2Underline({...data, ...createInfo});
    const insertField = ['account', 'password', 'realname', 'email', 'phone', 'profile_photo', 'sex', 'create_by', 'create_by_name', 'create_date_time']
    let result = await insert('user', generateInsertData(insertField, data));
    return result
  },
  
  // 删除用户
  async deleteOneUser(id, updateInfo) {
    let result = await logicDeleteById('user', id, updateInfo)
    return result
  },

  async updateUser(data, updateInfo) {
    data = lowerCamelCase2Underline({...data, ...updateInfo});
    const updateField = ['realname', 'email', 'phone', 'profile_photo', 'sex', 'update_by', 'update_by_name', 'update_date_time']
    let result = await updateById('user', data.id, generateInsertData(updateField, data))
    return result
  }
};

export default user;
