import menuService from '../services/menu.js'

const menu = {
  async addMenu(ctx) {
    const body = ctx.request.body
    const { parentId, permissionName } = body
    const createInfo = ctx.state.createInfo

    // TODO: 判断parentId下是否有重名的permissionName

    let result = await menuService.addMenu(body, createInfo)
    ctx.body = result
  }
}

export default menu
