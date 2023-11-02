import { insert, query } from '../utils/db-util.js'
import {
  generateInsertData,
  lowerCamelCase2Underline,
  underline2LowerCamelCase
} from '../utils/tool.js'

let field = ['menu_id', 'role_id']
const roleMenu = {
  async add(data, createInfo) {
    data = lowerCamelCase2Underline({ ...data, ...createInfo })
    let result = await insert(
      'role_menu',
      generateInsertData(field.concat(['create_by', 'create_by_name', 'create_date_time']), data)
    )
    return result
  },
  async deleteByRoleId(roleId) {
    const sql = `DELETE FROM role_menu WHERE role_id = ${roleId}`
    let result = await query(sql)
    return result
  },
  async getMenusByRoleId(roleId) {
    const sql = `SELECT * FROM role_menu WHERE role_id = ${roleId}`
    let result = await query(sql)
    result = underline2LowerCamelCase(result)
    return result
  },
  async getMenusInfoByRoleIds(roleIds) {
    const sql = `SELECT menu.* FROM role_menu INNER JOIN menu ON role_menu.menu_id = menu.id WHERE role_menu.role_id IN (${roleIds.join(
      ','
    )})`
    let result = await query(sql)
    result = underline2LowerCamelCase(result)
    return result
  }
}

export default roleMenu
