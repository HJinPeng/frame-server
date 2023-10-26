const Router = require("@koa/router");
const dictItemController = require("../controllers/dict-item");

const router = new Router({
  prefix: "/dict-item",
});

router.get("/page", dictItemController.getDictItemPage);
router.post('/add', dictItemController.addDictItem)
router.delete('/delete/:id', dictItemController.deleteDictItemById)
router.put('/edit', dictItemController.updateDictItem)

module.exports = router;
