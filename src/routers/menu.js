import Router from '@koa/router'
import menuController from '../controllers/menu.js'

const router = new Router({
  prefix: '/menu'
})

router.post('/add', menuController.addMenu)

export default router
