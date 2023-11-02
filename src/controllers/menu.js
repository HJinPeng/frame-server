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
    const exist = await menuService.existSameMenu(permissionName, parentId, id)
    if (exist) {
      ctx.throw(500, '同一级菜单中不能有相同的名称')
      return
    }
    const updateInfo = ctx.state.updateInfo
    let result = await menuService.updateMenu(body, updateInfo)
    ctx.body = result
  },

  async deleteMenuById(ctx) {
    const id = ctx.params.id
    const updateInfo = ctx.state.updateInfo
    // 判断是否是叶子节点
    const isLeaf = await menuService.isLeafMenu(id)
    if (isLeaf) {
      let result = await menuService.deleteMenuById(id, updateInfo)
      ctx.body = result
    } else {
      ctx.throw(500, '该节点下还有其他叶子节点，不能删除')
      return
    }
  }
}

export default menu
