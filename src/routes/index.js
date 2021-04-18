const siteRouter = require('./site');
const newsRouter = require('./news');
const courseRouter = require('./course');
const meRouter = require('./me');
function route(app) {
    //   app.use("/form", siteRouter);
    app.use('/me', meRouter);
    app.use('/course', courseRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
