import Router from '@koa/router'
import userController from '../controllers/user.js'

const router = new Router()

router.post('/login', userController.login)
router.get('/getUserInfo', userController.getUserInfo)
router.get('/queryUserMenuPermission', userController.getUserMenus)

export default router
