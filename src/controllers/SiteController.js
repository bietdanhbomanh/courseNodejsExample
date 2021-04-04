class siteController {
  // [GET] news
  index(req, res) {
    res.render("home");
  }
  search(req, res) {
    res.render("form");
  }
}
module.exports = new siteController();
