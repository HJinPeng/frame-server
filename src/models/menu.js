import { insert, logicDeleteById, query, updateById } from '../utils/db-util.js'
import {
  generateInsertData,
  lowerCamelCase2Underline,
  stringifySqlField,
  underline2LowerCamelCase
} from '../utils/tool.js'

const menuField = [
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
  'status',
  'parent_id'
]

const menu = {
  // 新增菜单
  async insertMenu(data, createInfo) {
    data = lowerCamelCase2Underline({ ...data, ...createInfo })
    console.log('data', data)
    const insertField = menuField
    console.log('after,', generateInsertData(insertField, data))
    let result = await insert('menu', generateInsertData(insertField, data))
    return result
  },

  // 获取所有菜单
  async getAllMenu() {
    const sql = `SELECT * FROM menu WHERE deleted != 1`
    let result = await query(sql)
    result = underline2LowerCamelCase(result)
    return result
  },

  async existSameMenu(permissionName, parentId, id) {
    const sql = `SELECT permission_name FROM menu WHERE ${
      parentId ? `parent_id = ${parentId}` : `parent_id IS NULL`
    } AND permission_name = '${permissionName}' AND deleted != 1 ${id ? `AND id != ${id}` : ''}`
    console.log('sql', sql)
    let result = await query(sql)
    return Array.isArray(result) && result.length > 0
  },

  async updateMenu(data, updateInfo) {
    data = lowerCamelCase2Underline({ ...data, ...updateInfo })
    const updateField = menuField.concat(['update_by', 'update_by_name', 'update_date_time'])
    let result = await updateById(
      'menu',
      data.id,
      generateInsertData(updateField, data, {
        extraValues: [`parent_id=${data.parent_id || 'NULL'}`]
      })
    )
    return result
  },

  async deleteMenu(id, updateInfo) {
    let result = await logicDeleteById('menu', id, updateInfo)
    return result
  },

  async isLeafMenu(id) {
    const sql = `SELECT permission_code FROM menu WHERE parent_id = ${id} AND deleted != 1`
    let result = await query(sql)
    return !(Array.isArray(result) && result.length > 0)
  }
}

export default menu
