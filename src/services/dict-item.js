const dictItemModel = require("../models/dict-item");
const { generatePageCondition, standardizePageData } = require("../utils/tool");

const dictItem = {

  // 根据分页参数获取
  async page({ dictId, dictItemCode, dictItemName, status, orderBy, isAsc, pageNo, pageSize }) {
    const condition = generatePageCondition({
      orderBy,
      isAsc,
      pageNo,
      pageSize,
      filters: [
        { key: "dict_id", value: dictId, operator: '='},
        { key: "dict_item_code", value: dictItemCode, operator: "LIKE" },
        { key: "dict_item_name", value: dictItemName, operator: "LIKE" },
        { key: "status", value: status, operator: "=" },
      ],
    });
    console.log("condition",condition);
    const { records, total } = await dictItemModel.page(condition);
    return standardizePageData({ pageNo, pageSize, records, total });
  },

  // 新增字典条目
  async addDictItem(data, createInfo) {
    await dictItemModel.insertDictItem(data, createInfo);
    return '新增成功'
  },

  // 通过id删除字典条目
  async deleteDictItemById(id, updateInfo) {
    await dictItemModel.deleteOneDictItem(id, updateInfo);
    return '删除成功'
  },

  // 更新字典条目
  async updateDictItem(data, updateInfo) {
    await dictItemModel.updateDictItem(data, updateInfo)
    return '更新成功'
  },

  // 判断字典条目编码是否存在
  async existDictItemCode(dictItemCode, exceptId, exceptDictId) {
    let result = await dictItemModel.existDictItemCode(dictItemCode, exceptId, exceptDictId)
    return result;
  },

  // 判断字典条目名称是否存在
  async existDictItemName(dictItemName, exceptId, exceptDictId) {
    let result = await dictItemModel.existDictItemName(dictItemName, exceptId, exceptDictId)
    return result;
  }
};

module.exports = dictItem;
