import fs from 'node:fs'
import path from 'node:path'

const secret = fs.readFileSync(path.resolve(process.cwd(), '../frame-server_secret-key.txt'), {
  encoding: 'utf-8'
})
export default secret
