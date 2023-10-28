const Router = require("@koa/router");
const dictController = require("../controllers/dict");

const router = new Router({
  prefix: "/dict",
});

router.get("/page", dictController.getDictPage);
router.post('/add', dictController.addDict)
router.delete('/delete/:id', dictController.deleteDictById)
router.put('/edit', dictController.updateDict)
router.get('/get', dictController.getDict)
router.get('/batch', dictController.getDictBatch)

module.exports = router;
