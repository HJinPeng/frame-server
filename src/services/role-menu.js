import roleMenuModel from '../models/role-menu.js'
import { assembleMenu } from '../utils/menu.js'

const roleMenu = {
  // 新增角色菜单关系
  async add(roleId, menus, createInfo) {
    console.log(roleId, menus)
    let result = await Promise.all(
      menus.map((menuId) => roleMenuModel.add({ roleId, menuId }, createInfo))
    )
    console.log('add', result)
    return result
  },

  // 更新角色菜单关系
  async update(roleId, menus, createInfo) {
    console.log('update', roleId, menus, createInfo)
    let deleteResult = await roleMenu.deleteByRoleId(roleId)
    console.log('deleteResult', deleteResult)
    let addResult = await roleMenu.add(roleId, menus, createInfo)
    console.log('addResult', addResult)
    return [deleteResult, addResult]
  },

  async deleteByRoleId(roleId) {
    let result = await roleMenuModel.deleteByRoleId(roleId)
    return result
  },

  // 获取角色关联的菜单id
  async getMenusByRoleId(roleId) {
    let result = await roleMenuModel.getMenusByRoleId(roleId)
    return result
  },

  // 获取角色关联的菜单详细信息
  async getMenusInfoByRoleIds(roleIds) {
    let menus = await roleMenuModel.getMenusInfoByRoleIds(roleIds)
    menus = assembleMenu(menus)
    return menus
  }
}

export default roleMenu
