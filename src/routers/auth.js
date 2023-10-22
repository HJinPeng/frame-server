const Router = require('@koa/router')
const userController = require('../controllers/user')

const router = new Router();

router.post('/login', userController.login)
router.get('/getUserInfo', userController.getUserInfo)

module.exports = router

