import { query, filterByPage, count, insert, logicDeleteById, updateById} from "../utils/db-util.js"
import { stringifySqlField, generateInsertData, underline2LowerCamelCase, lowerCamelCase2Underline } from "../utils/tool.js";

const userField = [
  "id",
  "role_code",
  "role_name",
  "status"
];

const role = {

  // 查询 start 到 end 范围的符合条件的角色
  async page(condition) {
    const total = await count("role", condition.where);
    let records = await filterByPage(
      "role",
      stringifySqlField(userField),
      condition
    );
    return {
      total,
      records: underline2LowerCamelCase(records),
    };
  },

  // 新增角色
  async insertRole(data, createInfo) {
    data = lowerCamelCase2Underline({...data, ...createInfo});
    const insertField = ['role_code', 'role_name', 'create_by', 'create_by_name', 'create_date_time']
    let result = await insert('role', generateInsertData(insertField, data));
    return result
  },
  
  // 删除角色
  async deleteOneRole(id, updateInfo) {
    let result = await logicDeleteById('role', id, updateInfo)
    return result
  },

  // 更新角色
  async updateRole(data, updateInfo) {
    data = lowerCamelCase2Underline({...data, ...updateInfo});
    const updateField = ['role_code', 'role_name', 'update_by', 'update_by_name', 'update_date_time']
    let result = await updateById('role', data.id, generateInsertData(updateField, data))
    return result
  },

  // 判断角色编码是否存在
  async existRoleCode(roleCode, exceptId) {
    const sql = `SELECT role_code FROM role WHERE role_code = '${roleCode}' AND deleted != 1 ${exceptId ? 'AND id != ' + exceptId : ''}`;
    console.log(sql);
    let result = await query(sql);
    return Array.isArray(result) && result.length > 0
  },

  // 判断角色名称是否存在
  async existRoleName(roleName, exceptId) {
    const sql = `SELECT role_name FROM role WHERE role_name = '${roleName}' AND deleted != 1  ${exceptId ? 'AND id != ' + exceptId : ''}`;
    console.log(sql);
    let result = await query(sql);
    return Array.isArray(result) && result.length > 0
  }
};

export default role;
