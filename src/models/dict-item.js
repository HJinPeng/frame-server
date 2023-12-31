import {
  query,
  filterByPage,
  count,
  insert,
  logicDeleteById,
  updateById
} from '../utils/db-util.js'
import {
  stringifySqlField,
  generateInsertData,
  underline2LowerCamelCase,
  lowerCamelCase2Underline
} from '../utils/tool.js'

const dictItemField = ['id', 'dict_id', 'dict_item_code', 'dict_item_name', 'sort', 'status']

const dictItem = {
  // 查询 start 到 end 范围的符合条件的字典条目
  async page(condition) {
    const total = await count('dict_item', condition.where)
    let records = await filterByPage('dict_item', stringifySqlField(dictItemField), condition)
    return {
      total,
      records: underline2LowerCamelCase(records)
    }
  },

  // 新增字典条目
  async insertDictItem(data, createInfo) {
    data = lowerCamelCase2Underline({ ...data, ...createInfo })
    const insertField = [
      'dict_id',
      'dict_item_code',
      'dict_item_name',
      'sort',
      'status',
      'create_by',
      'create_by_name',
      'create_date_time'
    ]
    let result = await insert('dict_item', generateInsertData(insertField, data))
    return result
  },

  // 删除字典条目
  async deleteOneDictItem(id, updateInfo) {
    let result = await logicDeleteById('dict_item', id, updateInfo)
    return result
  },

  // 根据字典id,删除字典条目表中关联的所有条目
  async deleteDictItemByDictId(dictId, updateInfo) {
    const sql = `UPDATE dict_item SET deleted = 1, update_by = '${updateInfo.updateBy}', update_by_name = '${updateInfo.updateByName}', update_date_time = '${updateInfo.updateDateTime}' WHERE dict_id = ${dictId}`
    let result = await query(sql)
    return result
  },

  // 更新字典条目
  async updateDictItem(data, updateInfo) {
    data = lowerCamelCase2Underline({ ...data, ...updateInfo })
    const updateField = [
      'dict_id',
      'dict_item_code',
      'dict_item_name',
      'sort',
      'status',
      'update_by',
      'update_by_name',
      'update_date_time'
    ]
    let result = await updateById('dict_item', data.id, generateInsertData(updateField, data))
    return result
  },

  // 判断字典条目编码是否存在
  async existDictItemCode(dictItemCode, exceptId, exceptDictId) {
    const sql = `SELECT dict_item_code FROM dict_item WHERE dict_item_code = '${dictItemCode}' AND deleted != 1 ${
      exceptId ? 'AND id != ' + exceptId : ''
    } AND dict_id = ${exceptDictId}`
    console.log(sql)
    let result = await query(sql)
    return Array.isArray(result) && result.length > 0
  },

  // 判断字典条目名称是否存在
  async existDictItemName(dictItemName, exceptId, exceptDictId) {
    const sql = `SELECT dict_item_name FROM dict_item WHERE dict_item_name = '${dictItemName}' AND deleted != 1  ${
      exceptId ? 'AND id != ' + exceptId : ''
    } AND dict_id = ${exceptDictId}`
    console.log(sql)
    let result = await query(sql)
    return Array.isArray(result) && result.length > 0
  }
}

export default dictItem
