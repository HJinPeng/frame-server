import Router from '@koa/router'
import roleController from '../controllers/role.js'

const router = new Router({
  prefix: '/role'
})

router.get('/page', roleController.getRolePage)
router.get('/all', roleController.all)
router.post('/add', roleController.addRole)
router.delete('/delete/:id', roleController.deleteRoleById)
router.put('/edit', roleController.updateRole)
router.put('/set-menus', roleController.updateRoleMenus)
router.get('/get-menus/:id', roleController.getRoleMenus)

export default router
