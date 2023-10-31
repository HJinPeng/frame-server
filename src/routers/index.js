import Router from '@koa/router'
import authRouter from './auth.js'
import userRouter from './user.js'
import roleRouter from './role.js'
import dictRouter from './dict.js'
import dictItemRouter from './dict-item.js'
import menuRouter from './menu.js'

const router = new Router()

router
  .use(authRouter.routes(), authRouter.allowedMethods())
  .use(userRouter.routes(), userRouter.allowedMethods())
  .use(roleRouter.routes(), roleRouter.allowedMethods())
  .use(dictRouter.routes(), dictRouter.allowedMethods())
  .use(dictItemRouter.routes(), dictItemRouter.allowedMethods())
  .use(menuRouter.routes(), menuRouter.allowedMethods())

export default router
