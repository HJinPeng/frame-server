import roleModel from "../models/role.js";
import { generatePageCondition, standardizePageData } from "../utils/tool.js";

const role = {

  // 根据分页参数获取
  async page({ roleCode, roleName, status, orderBy, isAsc, pageNo, pageSize }) {
    const condition = generatePageCondition({
      orderBy,
      isAsc,
      pageNo,
      pageSize,
      filters: [
        { key: "role_code", value: roleCode, operator: "LIKE" },
        { key: "role_name", value: roleName, operator: "LIKE" },
        { key: "status", value: status, operator: "=" },
      ],
    });
    console.log("condition",condition);
    const { records, total } = await roleModel.page(condition);
    return standardizePageData({ pageNo, pageSize, records, total });
  },

  // 新增角色
  async addRole(data, createInfo) {
    await roleModel.insertRole(data, createInfo);
    return '新增成功'
  },

  // 通过id删除角色
  async deleteRoleById(id, updateInfo) {
    await roleModel.deleteOneRole(id, updateInfo);
    return '删除成功'
  },

  // 更新角色
  async updateRole(data, updateInfo) {
    await roleModel.updateRole(data, updateInfo)
    return '更新成功'
  },

  // 判断角色编码是否存在
  async existRoleCode(roleCode, exceptId) {
    let result = await roleModel.existRoleCode(roleCode, exceptId)
    return result;
  },

  // 判断角色名称是否存在
  async existRoleName(roleName, exceptId) {
    let result = await roleModel.existRoleName(roleName, exceptId)
    return result;
  }
};

export default role;
