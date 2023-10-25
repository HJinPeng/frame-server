const Router = require('@koa/router')
const authRouter = require('./auth')
const userRouter = require('./user')
const roleRouter = require('./role')

const router = new Router();

router
  .use(authRouter.routes(), authRouter.allowedMethods())
  .use(userRouter.routes(), userRouter.allowedMethods())
  .use(roleRouter.routes(), roleRouter.allowedMethods())

module.exports = router