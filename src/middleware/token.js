import unless from 'koa-unless'
import { TOKEN_TIME } from '../config/const.js'
import { setTokenToRedis, getTokenInRedis } from '../utils/redis-util.js'
import { resolveToken } from '../utils/token.js'

export default function () {
  const middleware = async function (ctx, next) {
    // 没有token，401
    if (!ctx.header || !ctx.header['x-access-token']) {
      ctx.throw(403, '没权限访问')
      return
    }

    const token = ctx.header['x-access-token'].trim()
    // 解析token获取用户信息
    const user = resolveToken(token)
    // 现在时间，**s
    const now = Math.floor(Date.now() / 1000)

    // token没过期
    if (now - user.iat < TOKEN_TIME) {
      ctx.state.user = user
    }
    // token过期
    else {
      const exist = await getTokenInRedis(token)
      // redis存在该token，表示用户仍然在操作，没过期
      if (exist) {
        // 延长redis该token的过期时间
        await setTokenToRedis(token)
        ctx.state.user = user
      }
      // redis的该token不存在，表示用户太久没操作过期了
      else {
        ctx.throw(401)
        return
      }
    }
    await next()
  }
  // 用于白名单
  middleware.unless = unless
  return middleware
}
