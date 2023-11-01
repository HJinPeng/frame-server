import menuModel from '../models/menu.js'

/**
 * 根据所有菜单生成菜单树
 * @param {*} menus
 * @returns
 */
function assembleMenu(menus) {
  const menuMap = {}
  const parentMap = {}
  const rootMenu = []
  menus.forEach((menu) => {
    menuMap[menu.id] = menu
    const parentId = menu.parentId
    if (parentId) {
      if (!parentMap[parentId]) {
        parentMap[parentId] = []
      }
      parentMap[parentId].push(menu.id)
    } else {
      rootMenu.push(menu)
    }
  })
  function generateMenu(menuArr) {
    return menuArr.map((menu) => {
      if (parentMap[menu.id]?.length) {
        const children = parentMap[menu.id]
          .map((childId) => {
            return menuMap[childId]
          })
          .sort((a, b) => a.ranking - b.ranking)
        return {
          ...menu,
          children: generateMenu(children)
        }
      } else {
        return menu
      }
    })
  }

  const result = generateMenu(rootMenu)
  return result
}

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

  async existSameMenu(permissionName, parentId) {
    let result = await menuModel.existSameMenu(permissionName, parentId)
    return result
  },

  async updateMenu(data, updateInfo) {
    await menuModel.updateMenu(data, updateInfo)
    return '更新成功'
  }
}

export default menu
