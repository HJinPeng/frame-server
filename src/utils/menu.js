/**
 * 根据所有菜单生成菜单树
 * @param {*} menus
 * @returns
 */
export function assembleMenu(menus) {
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
