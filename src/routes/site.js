const siteController = require("../controllers/SiteController");
var express = require("express");
const router = express.Router();

router.use("/form", siteController.search);
router.use("/", siteController.index);

module.exports = router;
