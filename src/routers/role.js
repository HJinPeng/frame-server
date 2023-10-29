import Router from "@koa/router";
import roleController from "../controllers/role.js";

const router = new Router({
  prefix: "/role",
});

router.get("/page", roleController.getRolePage);
router.post('/add', roleController.addRole)
router.delete('/delete/:id', roleController.deleteRoleById)
router.put('/edit', roleController.updateRole)

export default router;
