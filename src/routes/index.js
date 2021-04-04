const siteRouter = require("./site");
const newsRouter = require("./news");
function route(app) {
  //   app.use("/form", siteRouter);
  app.use("/", siteRouter);
  app.use("/news", newsRouter);
}

module.exports = route;
