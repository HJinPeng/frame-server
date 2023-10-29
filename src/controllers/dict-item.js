import dictItemService from '../services/dict-item.js'

const dictItem = {
  // 获取字典条目分页列表
  async getDictItemPage(ctx) {
    const query = ctx.query
    let result = await dictItemService.page({ ...query, orderBy: 'sort', isAsc: true })
    ctx.body = result
  },

  // 添加字典条目
  async addDictItem(ctx) {
    const body = ctx.request.body
    const { dictId, dictItemCode, dictItemName } = body
    const createInfo = ctx.state.createInfo
    const existCode = await dictItemService.existDictItemCode(dictItemCode, null, dictId)
    if (existCode) {
      ctx.throw(500, '字典条目编码重复，请重新输入')
      return
    }
    const existName = await dictItemService.existDictItemName(dictItemName, null, dictId)
    console.log('existName', existName)
    if (existName) {
      ctx.throw(500, '字典条目名称重复，请重新输入')
      return
    }
    let result = await dictItemService.addDictItem(body, createInfo)
    ctx.body = result
  },

  // 删除某字典条目
  async deleteDictItemById(ctx) {
    const id = ctx.params.id
    const updateInfo = ctx.state.updateInfo
    let result = await dictItemService.deleteDictItemById(id, updateInfo)
    ctx.body = result
  },

  // 更新字典条目信息
  async updateDictItem(ctx) {
    const body = ctx.request.body
    const { id, dictId, dictItemCode, dictItemName } = body
    if (!id) {
      ctx.throw(500, '字典条目id为空')
      return
    }
    // 判断更新的字典条目编码和字典条目名称是否和其他的重复
    const existCode = await dictItemService.existDictItemCode(dictItemCode, id, dictId)
    if (existCode) {
      ctx.throw(500, '字典条目编码重复，请重新输入')
      return
    }
    const existName = await dictItemService.existDictItemName(dictItemName, id, dictId)
    if (existName) {
      ctx.throw(500, '字典条目名称重复，请重新输入')
      return
    }
    const updateInfo = ctx.state.updateInfo
    let result = await dictItemService.updateDictItem(body, updateInfo)
    ctx.body = result
  }
}

export default dictItem
