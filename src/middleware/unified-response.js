// 通过 ctx.msg 设置成功响应的 message

module.exports = function () {
  return async function (ctx, next) {
    try {
      await next()
      ctx.body = {
        code: ctx.status,
        message: ctx.msg || 'OK',
        success: ctx.status === 200,
        result: ctx.body,
        timestamp: Date.now()
      }
    } catch (error) {
      ctx.body = {
        code: error.status,
        message: error.message || 'Internal Server Error',
        success: false,
        result: null,
        timestamp: Date.now()
      }
    }
  }
}