const Router = require("@koa/router");
const roleController = require("../controllers/role");

const router = new Router({
  prefix: "/role",
});

router.get("/page", roleController.getRolePage);
router.post('/add', roleController.addRole)
router.delete('/delete/:id', roleController.deleteRoleById)
router.put('/edit', roleController.updateRole)

module.exports = router;
