import Router from '@koa/router'
import menuController from '../controllers/menu.js'

const router = new Router({
  prefix: '/menu'
})

router.post('/add', menuController.addMenu)
router.get('/all-menu', menuController.getAllMenu)
router.put('/edit', menuController.updateMenu)
router.delete('/delete/:id', menuController.deleteMenuById)

export default router
