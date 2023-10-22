const Router = require('@koa/router')
const userController = require('../controllers/user')

const router = new Router({
  prefix: '/user'
});

router.post('/login', userController.login)

module.exports = router

