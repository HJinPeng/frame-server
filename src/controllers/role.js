const roleService = require("../services/role");

const role = {

  // 获取角色分页列表
  async getRolePage(ctx) {
    const query = ctx.query;
    let result = await roleService.page(query);
    ctx.body = result;
  },

  // 添加角色
  async addRole(ctx) {
    const { roleCode, roleName } = ctx.request.body;
    const createInfo = ctx.state.createInfo;
    const existCode = await roleService.existRoleCode(roleCode);
    if(existCode) {
      ctx.throw(500, '角色编码重复，请重新输入')
      return;
    }
    const existName = await roleService.existRoleName(roleName);
    console.log("existName", existName);
    if(existName) {
      ctx.throw(500, '角色名称重复，请重新输入')
      return;
    }
    let result = await roleService.addRole({ roleCode, roleName }, createInfo)
    ctx.body = result;
  },


  // 删除某角色
  async deleteRoleById(ctx) {
    const id = ctx.params.id;
    const updateInfo = ctx.state.updateInfo;
    let result = await roleService.deleteRoleById(id, updateInfo)
    ctx.body = result;
  },

  // 更新角色信息
  async updateRole(ctx) {
    const body = ctx.request.body;
    const { id, roleCode, roleName } = body;
    if(!id) {
      ctx.throw(500, '角色id为空')
      return;
    }
    // 判断更新的角色编码和角色名称是否和其他的重复
    const existCode = await roleService.existRoleCode(roleCode, id);
    if(existCode) {
      ctx.throw(500, '角色编码重复，请重新输入')
      return;
    }
    const existName = await roleService.existRoleName(roleName, id);
    if(existName) {
      ctx.throw(500, '角色名称重复，请重新输入')
      return;
    }
    const updateInfo = ctx.state.updateInfo;
    let result = await roleService.updateRole(body, updateInfo)
    ctx.body = result;
  }
};

module.exports = role;