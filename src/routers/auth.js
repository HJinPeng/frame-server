import Router from '@koa/router'
import userController from '../controllers/user.js'

const router = new Router()

router.post('/login', userController.login)
router.get('/getUserInfo', userController.getUserInfo)

export default router
