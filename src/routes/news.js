const newsController = require("../controllers/NewsController");
var express = require("express");
const router = express.Router();

router.use("/:slug", newsController.index2);

router.use("/", newsController.index);

module.exports = router;
