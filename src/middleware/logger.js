module.exports = function () {
  return async function ( ctx, next ) {
    const start = Date.now();
    await next()
    const end = Date.now();
    console.log(ctx.method, ctx.header.host + ctx.url, (end - start) + 'ms')
  }
}