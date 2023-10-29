import bcrypt from 'bcrypt'

const saltRounds = 10

/**
 * 将传入文本生成hash
 * @author jinpengh
 *
 * @async
 * @param {String} text
 * @returns {String}
 */
export async function getBcryptHash(text) {
  const hash = await bcrypt.hash(text, saltRounds)
  return hash
}

/**
 * 将原始文本和hash文本比对
 * @author jinpengh
 *
 * @async
 * @param {String} text
 * @param {String} hash
 * @returns {Boolean}
 */
export async function compareBcrypt(text, hash) {
  const same = await bcrypt.compare(text, hash)
  return same
}
