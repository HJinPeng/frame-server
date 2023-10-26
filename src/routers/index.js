const Router = require('@koa/router')
const authRouter = require('./auth')
const userRouter = require('./user')
const roleRouter = require('./role')
const dictRouter = require('./dict')
const dictItemRouter = require('./dict-item')

const router = new Router();

router
  .use(authRouter.routes(), authRouter.allowedMethods())
  .use(userRouter.routes(), userRouter.allowedMethods())
  .use(roleRouter.routes(), roleRouter.allowedMethods())
  .use(dictRouter.routes(), dictRouter.allowedMethods())
  .use(dictItemRouter.routes(), dictItemRouter.allowedMethods())

module.exports = router