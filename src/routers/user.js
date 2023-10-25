const Router = require("@koa/router");
const userController = require("../controllers/user");

const router = new Router({
  prefix: "/user",
});

router.get("/page", userController.getUserPage);
router.post('/add', userController.addUser)
router.delete('/delete/:id', userController.deleteUserById)
router.put('/edit', userController.updateUser)

module.exports = router;
