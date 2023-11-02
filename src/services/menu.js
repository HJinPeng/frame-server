import menuModel from '../models/menu.js'
import { assembleMenu } from '../utils/menu.js'

const menu = {
  async addMenu(data, createInfo) {
    await menuModel.insertMenu(data, createInfo)
    return '新增成功'
  },

  async getAllMenu() {
    let result = await menuModel.getAllMenu()
    result = assembleMenu(result)
    return result
  },

  async existSameMenu(permissionName, parentId, id) {
    let result = await menuModel.existSameMenu(permissionName, parentId, id)
    return result
  },

  async updateMenu(data, updateInfo) {
    await menuModel.updateMenu(data, updateInfo)
    return '更新成功'
  },

  async deleteMenuById(id, updateInfo) {
    await menuModel.deleteMenu(id, updateInfo)
    return '删除成功'
  },

  async isLeafMenu(id) {
    let result = await menuModel.isLeafMenu(id)
    return result
  }
}

export default menu
