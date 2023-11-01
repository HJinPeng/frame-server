import menuService from '../services/menu.js'

const menu = {
  async addMenu(ctx) {
    const body = ctx.request.body
    const { parentId, permissionName } = body
    const createInfo = ctx.state.createInfo

    // 判断parentId下是否有重名的permissionName
    const exist = await menuService.existSameMenu(permissionName, parentId)
    if (exist) {
      ctx.throw(500, '同一级菜单中不能有相同的名称')
      return
    }

    let result = await menuService.addMenu(body, createInfo)
    ctx.body = result
  },

  async getAllMenu(ctx) {
    let result = await menuService.getAllMenu()
    ctx.body = result
  },

  async updateMenu(ctx) {
    const body = ctx.request.body
    const { id, parentId, permissionName } = body
    if (!id) {
      ctx.throw(500, '菜单id为空')
      return
    }
    const exist = await menuService.existSameMenu(permissionName, parentId)
    if (exist) {
      ctx.throw(500, '同一级菜单中不能有相同的名称')
      return
    }
    const updateInfo = ctx.state.updateInfo
    let result = await menuService.updateMenu(body, updateInfo)
    ctx.body = result
  }
}

export default menu
