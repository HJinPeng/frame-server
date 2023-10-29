import Redis from 'ioredis'
import { TOKEN_TIME } from '../config/const.js'

const redis = new Redis()

/**
 * 将token放入redis中，并设置过期时间
 * @author jinpengh
 *
 * @async
 * @param {*} token
 * @returns {*}
 */
export async function setTokenToRedis(token) {
  await redis.set(token, Math.floor(Date.now() / 1000), 'EX', TOKEN_TIME * 2)
}

/**
 * 获取redis中的token
 * @author jinpengh
 *
 * @async
 * @param {*} token
 * @returns {unknown}
 */
export async function getTokenInRedis(token) {
  return await redis.get(token)
}

export default redis
