import { insert } from '../utils/db-util.js'
import { generateInsertData, lowerCamelCase2Underline } from '../utils/tool.js'

const menu = {
  // 新增菜单
  async insertMenu(data, createInfo) {
    data = lowerCamelCase2Underline({ ...data, ...createInfo })
    console.log('data', data)
    const insertField = [
      'permission_type',
      'permission_name',
      'menu_code',
      'permission_code',
      'permission_level',
      'icon',
      'layout',
      'ranking',
      'hidden_menu',
      'keep_alive',
      'external_link',
      'external_link_content',
      'parent_id'
    ]
    console.log('after,', generateInsertData(insertField, data))
    let result = await insert('menu', generateInsertData(insertField, data))
    return result
  }
}

export default menu
