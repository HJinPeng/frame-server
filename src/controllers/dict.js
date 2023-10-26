const dictService = require("../services/dict");

const dict = {

  // 获取字典分页列表
  async getDictPage(ctx) {
    const query = ctx.query;
    let result = await dictService.page(query);
    ctx.body = result;
  },

  // 添加字典
  async addDict(ctx) {
    const { dictCode, dictName } = ctx.request.body;
    const createInfo = ctx.state.createInfo;
    const existCode = await dictService.existDictCode(dictCode);
    if(existCode) {
      ctx.throw(500, '字典编码重复，请重新输入')
      return;
    }
    const existName = await dictService.existDictName(dictName);
    console.log("existName", existName);
    if(existName) {
      ctx.throw(500, '字典名称重复，请重新输入')
      return;
    }
    let result = await dictService.addDict({ dictCode, dictName }, createInfo)
    ctx.body = result;
  },


  // 删除某字典
  async deleteDictById(ctx) {
    const id = ctx.params.id;
    const updateInfo = ctx.state.updateInfo;
    let result = await dictService.deleteDictById(id, updateInfo)
    ctx.body = result;
  },

  // 更新字典信息
  async updateDict(ctx) {
    const body = ctx.request.body;
    const { id, dictCode, dictName } = body;
    if(!id) {
      ctx.throw(500, '字典id为空')
      return;
    }
    // 判断更新的字典编码和字典名称是否和其他的重复
    const existCode = await dictService.existDictCode(dictCode, id);
    if(existCode) {
      ctx.throw(500, '字典编码重复，请重新输入')
      return;
    }
    const existName = await dictService.existDictName(dictName, id);
    if(existName) {
      ctx.throw(500, '字典名称重复，请重新输入')
      return;
    }
    const updateInfo = ctx.state.updateInfo;
    let result = await dictService.updateDict(body, updateInfo)
    ctx.body = result;
  }
};

module.exports = dict;
