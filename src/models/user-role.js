import { deleteById, insert, query } from '../utils/db-util.js'
import {
  generateInsertData,
  lowerCamelCase2Underline,
  underline2LowerCamelCase
} from '../utils/tool.js'

let field = ['user_id', 'role_id']
const userRole = {
  async add(data, createInfo) {
    data = lowerCamelCase2Underline({ ...data, ...createInfo })
    let result = await insert(
      'user_role',
      generateInsertData(field.concat(['create_by', 'create_by_name', 'create_date_time']), data)
    )
    return result
  },
  async deleteByUserId(userId) {
    const sql = `DELETE FROM user_role WHERE user_id = ${userId}`
    let result = await query(sql)
    return result
  },
  async getRolesByUserId(userId) {
    const sql = `SELECT * FROM user_role WHERE user_id = ${userId}`
    let result = await query(sql)
    result = underline2LowerCamelCase(result)
    return result
  },
  async getRolesInfoByUserId(userId) {
    const sql = `SELECT role.id, role.role_code, role.role_name, role.status FROM user_role INNER JOIN role ON user_role.role_id = role.id WHERE user_role.user_id = ${userId}`
    let result = await query(sql)
    result = underline2LowerCamelCase(result)
    return result
  }
}

export default userRole
