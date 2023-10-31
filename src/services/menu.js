import menuModel from '../models/menu.js'

const menu = {
  async addMenu(data, createInfo) {
    await menuModel.insertMenu(data, createInfo)
    return '新增成功'
  }
}

export default menu
