import userRoleModel from '../models/user-role.js'

const userRole = {
  // 新增用户角色关系
  async add(userId, roles, createInfo) {
    console.log(userId, roles)
    let result = await Promise.all(
      roles.map((roleId) => userRoleModel.add({ userId, roleId }, createInfo))
    )
    console.log('add', result)
    return result
  },

  // 更新用户角色关系
  async update(userId, roles, createInfo) {
    console.log('update', userId, roles, createInfo)
    let deleteResult = await userRole.deleteByUserId(userId)
    console.log('deleteResult', deleteResult)
    let addResult = await userRole.add(userId, roles, createInfo)
    console.log('addResult', addResult)
    return [deleteResult, addResult]
  },

  // 根据用户id删除关联数据
  async deleteByUserId(userId) {
    let result = await userRoleModel.deleteByUserId(userId)
    return result
  },

  async deleteByRoleId(roleId) {
    let result = await userRoleModel.deleteByRoleId(roleId)
    return result
  },

  // 获取用户的角色关联信息
  async getRolesByUserId(userId) {
    let result = await userRoleModel.getRolesByUserId(userId)
    return result
  },

  // 获取用户的关联角色的详情信息
  async getRolesInfoByUserId(userId) {
    let result = await userRoleModel.getRolesInfoByUserId(userId)
    return result
  }
}

export default userRole
