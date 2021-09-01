const Router = require("express");
const router = new Router();
const pizzaRouter = require("./pizzaRouter");
router.use("/pizza", pizzaRouter);
module.exports = router;
