const Course = require('../models/Course');

module.exports = function (req, res, next) {
    res.locals.sort = {
        enabled: false,
        type: 'default',
    };

    if (req.query.hasOwnProperty('sort')) {
        Object.assign(
            res.locals.sort,
            { enabled: true },
            { type: req.query.type },
            { field: req.query.field }
        );
    }
    req.dataSorted = (course) => {
        return !course
            ? Course.find({}).sort({
                  [req.query.field]: req.query.type,
              })
            : course.find({}).sort({
                  [req.query.field]: req.query.type,
              });
    };

    next();
};
