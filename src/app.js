import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koaJwt from 'koa-jwt'
import logger from './middleware/logger.js'
import unifiedResponse from './middleware/unified-response.js'
import operationInfo from './middleware/operation-info.js'
import router from './routers/index.js'
import secret from './utils/secret-key.js'
import getToken from './utils/get-token.js'
import whiteList from './config/white-list.js'

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