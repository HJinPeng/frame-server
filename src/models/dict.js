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
const dictField = ['id', 'dict_code', 'dict_name', 'status']

const dictItemField = ['id', 'dict_id', 'dict_item_code', 'dict_item_name', 'sort', 'status']

const dict = {
  // 查询 start 到 end 范围的符合条件的字典
  async page(condition) {
    const total = await count('dict', condition.where)
    let records = await filterByPage('dict', stringifySqlField(dictField), condition)
    return {
      total,
      records: underline2LowerCamelCase(records)
    }
  },

  // 新增字典
  async insertDict(data, createInfo) {
    data = lowerCamelCase2Underline({ ...data, ...createInfo })
    const insertField = [
      'dict_code',
      'dict_name',
      'status',
      'create_by',
      'create_by_name',
      'create_date_time'
    ]
    let result = await insert('dict', generateInsertData(insertField, data))
    return result
  },

  // 删除字典
  async deleteOneDict(id, updateInfo) {
    // TODO: 使用事务，删除子项，再删除字典
    let result = await logicDeleteById('dict', id, updateInfo)
    return result
  },

  // 更新字典
  async updateDict(data, updateInfo) {
    data = lowerCamelCase2Underline({ ...data, ...updateInfo })
    const updateField = [
      'dict_code',
      'dict_name',
      'status',
      'update_by',
      'update_by_name',
      'update_date_time'
    ]
    let result = await updateById('dict', data.id, generateInsertData(updateField, data))
    return result
  },

  // 判断字典编码是否存在
  async existDictCode(dictCode, exceptId) {
    const sql = `SELECT dict_code FROM dict WHERE dict_code = '${dictCode}' AND deleted != 1 ${
      exceptId ? 'AND id != ' + exceptId : ''
    }`
    console.log(sql)
    let result = await query(sql)
    return Array.isArray(result) && result.length > 0
  },

  // 判断字典名称是否存在
  async existDictName(dictName, exceptId) {
    const sql = `SELECT dict_name FROM dict WHERE dict_name = '${dictName}' AND deleted != 1  ${
      exceptId ? 'AND id != ' + exceptId : ''
    }`
    console.log(sql)
    let result = await query(sql)
    return Array.isArray(result) && result.length > 0
  },

  // 根据字典编码获取字典条目
  async getDictByCode(dictCode) {
    const sql = `SELECT dict.dict_code, dict.dict_name, dict_item.dict_item_code, dict_item.dict_item_name
    FROM dict
    INNER JOIN dict_item ON dict.id = dict_item.dict_id
    WHERE dict.dict_code = '${dictCode}' AND dict.deleted != 1 AND dict.status = '1' AND dict_item.deleted != 1 AND dict_item.status = '1'`
    let result = await query(sql)
    result = underline2LowerCamelCase(result)
    return result
  },

  // 根据多个字典编码找到多个字典，并关联字典条目表
  async getDictsByCodes(dictCodes) {
    const sql = `SELECT dict.dict_code, dict.dict_name, dict_item.dict_item_code, dict_item.dict_item_name
    FROM dict
    INNER JOIN dict_item ON dict.id = dict_item.dict_id
    WHERE dict.dict_code IN (${dictCodes
      .map((code) => `'${code}'`)
      .join(
        ','
      )}) AND dict.deleted != 1 AND dict.status = '1' AND dict_item.deleted != 1 AND dict_item.status = '1'`
    let result = await query(sql)
    result = underline2LowerCamelCase(result)
    return result
  }
}

export default dict
