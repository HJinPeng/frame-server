import Router from "@koa/router";
import dictController from "../controllers/dict.js";

const router = new Router({
  prefix: "/dict",
});

router.get("/page", dictController.getDictPage);
router.post('/add', dictController.addDict)
router.delete('/delete/:id', dictController.deleteDictById)
router.put('/edit', dictController.updateDict)
router.get('/get', dictController.getDict)
router.get('/batch', dictController.getDictBatch)

export default router;
