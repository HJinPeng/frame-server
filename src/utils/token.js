import jwt from 'jsonwebtoken'
import secret from '../utils/secret-key.js'

/**
 * 生成token
 * @author jinpengh
 *
 * @param {*} data
 * @returns {string}
 */
export function generateToken(data) {
  const token = jwt.sign(data, secret)
  return 'Bearer ' + token
}

/**
 * 解析token
 * @author jinpengh
 *
 * @param {*} token
 * @returns {*}
 */
export function resolveToken(token) {
  const [prefix, value] = token.split(' ')
  if (prefix === 'Bearer') {
    try {
      const data = jwt.verify(value, secret)
      return data
    } catch (error) {
      return undefined
    }
  } else {
    return undefined
  }
}
