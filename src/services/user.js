const userModel = require('../models/user')

const user = {
  async login(data) {
    let result = userModel.getOneByAccountAndPassword({
      account: data.account,
      password: data.password
    });
    return result
  }
}

module.exports = user