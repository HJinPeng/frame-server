const Router = require('@koa/router')
const authRouter = require('./auth')
const userRouter = require('./user')

const router = new Router();

router
  .use(authRouter.routes(), authRouter.allowedMethods())
  .use(userRouter.routes(), userRouter.allowedMethods())

module.exports = router