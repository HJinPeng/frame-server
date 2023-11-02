import Router from '@koa/router'
import userController from '../controllers/user.js'

const router = new Router({
  prefix: '/user'
})

router.get('/page', userController.getUserPage)
router.post('/add', userController.addUser)
router.delete('/delete/:id', userController.deleteUserById)
router.put('/edit', userController.updateUser)
router.get('/detail/:id', userController.getUserDetail)

export default router
