const { query } = require('../utils/db')

const user = {
  async getOneByAccountAndPassword(model) {
    const sql = `SELECT account, realname, email, phone, profilePhoto, sex, status FROM user 
      WHERE account = '${model.account}' AND password = '${model.password}'  LIMIT 1`
    let result = await query(sql)
    if(Array.isArray(result) && result.length > 0) {
      result = result[0]
    }else {
      result = null;
    }
    return result
  }
}

module.exports = user