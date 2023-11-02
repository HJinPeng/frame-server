import roleService from '../services/role.js'
import roleMenuService from '../services/role-menu.js'

const role = {
  // 获取角色分页列表
  async getRolePage(ctx) {
    const query = ctx.query
    let result = await roleService.page(query)
    ctx.body = result
  },

  // 所有角色
  async all(ctx) {
    let result = await roleService.all()
    ctx.body = result
  },

  // 添加角色
  async addRole(ctx) {
    const { roleCode, roleName } = ctx.request.body
    const createInfo = ctx.state.createInfo
    const existCode = await roleService.existRoleCode(roleCode)
    if (existCode) {
      ctx.throw(500, '角色编码重复，请重新输入')
      return
    }
    const existName = await roleService.existRoleName(roleName)
    console.log('existName', existName)
    if (existName) {
      ctx.throw(500, '角色名称重复，请重新输入')
      return
    }
    let result = await roleService.addRole({ roleCode, roleName }, createInfo)
    ctx.body = result
  },

  // 删除某角色
  async deleteRoleById(ctx) {
    const id = ctx.params.id
    const updateInfo = ctx.state.updateInfo
    let result = await roleService.deleteRoleById(id, updateInfo)
    // TODO: 删除用户-角色表对应的角色id
    // TODO: 删除角色-菜单表对应的角色id
    ctx.body = result
  },

  // 更新角色信息
  async updateRole(ctx) {
    const body = ctx.request.body
    const { id, roleCode, roleName } = body
    if (!id) {
      ctx.throw(500, '角色id为空')
      return
    }
    // 判断更新的角色编码和角色名称是否和其他的重复
    const existCode = await roleService.existRoleCode(roleCode, id)
    if (existCode) {
      ctx.throw(500, '角色编码重复，请重新输入')
      return
    }
    const existName = await roleService.existRoleName(roleName, id)
    if (existName) {
      ctx.throw(500, '角色名称重复，请重新输入')
      return
    }
    const updateInfo = ctx.state.updateInfo
    let result = await roleService.updateRole(body, updateInfo)
    ctx.body = result
  },

  async updateRoleMenus(ctx) {
    const body = ctx.request.body
    const { roleId, menus } = body
    const createInfo = ctx.state.createInfo
    let result = await roleMenuService.update(roleId, menus, createInfo)
    ctx.body = '更新成功'
  },

  async getRoleMenus(ctx) {
    const roleId = ctx.params.id
    let result = await roleMenuService.getMenusByRoleId(roleId)
    result = result.map((item) => item.menuId)
    ctx.body = result
  }
}

export default role
