const fs = require('fs')
const path = require('path')
const secret = fs.readFileSync(path.resolve(process.cwd(), '../frame-server_secret-key.txt'), {encoding: 'utf-8'})
module.exports = secret