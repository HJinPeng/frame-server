const Router = require("@koa/router");
const userController = require("../controllers/user");

const router = new Router({
  prefix: "/user",
});

router.get("/page", userController.getUserPage);
// router.get('/getUserInfo', userController.getUserInfo)

module.exports = router;
