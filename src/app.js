const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaJwt = require('koa-jwt')
const logger = require('./middleware/logger')
const unifiedResponse = require('./middleware/unified-response')
const operationInfo = require('./middleware/operation-info')
const router = require('./routers')
const secret = require('./utils/secret-key')
const getToken = require('./utils/get-token')
const whiteList = require('./config/white-list')

const app = new Koa()

app
  .use(logger())
  .use(unifiedResponse())
  .use(koaJwt({secret, getToken}).unless({path: whiteList}))
  .use(operationInfo())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(3000)
console.log('http://127.0.0.1:3000');