class NewsController {
  // [GET] news
  index(req, res) {
    res.render("news");
  }
  index2(req, res) {
    res.send("news2");
  }
}
module.exports = new NewsController();
