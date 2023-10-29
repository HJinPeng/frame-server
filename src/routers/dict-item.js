import Router from "@koa/router";
import dictItemController from "../controllers/dict-item.js";

const router = new Router({
  prefix: "/dict-item",
});

router.get("/page", dictItemController.getDictItemPage);
router.post('/add', dictItemController.addDictItem)
router.delete('/delete/:id', dictItemController.deleteDictItemById)
router.put('/edit', dictItemController.updateDictItem)

export default router;
