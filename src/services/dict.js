import dictModel from "../models/dict.js";
import { generatePageCondition, standardizePageData } from "../utils/tool.js";

const dict = {

  // 根据分页参数获取
  async page({ dictCode, dictName, status, orderBy, isAsc, pageNo, pageSize }) {
    const condition = generatePageCondition({
      orderBy,
      isAsc,
      pageNo,
      pageSize,
      filters: [
        { key: "dict_code", value: dictCode, operator: "LIKE" },
        { key: "dict_name", value: dictName, operator: "LIKE" },
        { key: "status", value: status, operator: "=" },
      ],
    });
    console.log("condition",condition);
    const { records, total } = await dictModel.page(condition);
    return standardizePageData({ pageNo, pageSize, records, total });
  },

  // 新增字典
  async addDict(data, createInfo) {
    await dictModel.insertDict(data, createInfo);
    return '新增成功'
  },

  // 通过id删除字典
  async deleteDictById(id, updateInfo) {
    await dictModel.deleteOneDict(id, updateInfo);
    return '删除成功'
  },

  // 更新字典
  async updateDict(data, updateInfo) {
    await dictModel.updateDict(data, updateInfo)
    return '更新成功'
  },

  // 判断字典编码是否存在
  async existDictCode(dictCode, exceptId) {
    let result = await dictModel.existDictCode(dictCode, exceptId)
    return result;
  },

  // 判断字典名称是否存在
  async existDictName(dictName, exceptId) {
    let result = await dictModel.existDictName(dictName, exceptId)
    return result;
  },

  // 根据字典编码获取字典条目 
  async getDictByCode(dictCode) {
    let result = await dictModel.getDictByCode(dictCode);
    return result;
  },

  // 根据dictCode数组找到所有字典
  async getDictsByCodes(dictCodes) {
    let result = await dictModel.getDictsByCodes(dictCodes);
    return result;
  }
};

export default dict;
