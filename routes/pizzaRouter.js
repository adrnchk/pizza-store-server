const Router = require("express");
const router = new Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Workin baby!!" });
});
module.exports = router;
