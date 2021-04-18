const Course = require('../models/Course');
const handleData = require('../util/handleMongoData');
class NewsController {
    // [GET] me/
    editOption(req, res, next) {
        // let coursesQuery = Course.find({});
        // if (req.query.hasOwnProperty('sort')) {
        //     coursesQuery = coursesQuery.sort({
        //         [req.query.field]: req.query.type,
        //     });
        // }
        Promise.all([Course.countDocumentsDeleted(), req.dataSorted()])
            .then(([count, courses]) =>
                res.render('myCourse', {
                    courses: handleData.handleArray(courses),
                    count,
                })
            )
            .catch(next);
    }
    // [get] me/edit/:id
    editOne(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((course) =>
                res.render('courses/edit', {
                    course: handleData.handleEle(course),
                })
            )
            .catch(next);
    }
    // [patch] me/done/:id

    update(req, res) {
        Course.updateOne({ _id: req.params.id }, req.body).then(() =>
            res.redirect('/me')
        );
    }
    // get /trash
    trash(req, res, next) {
        req.dataSorted(Course.findDeleted({}))
            .then((courses) =>
                res.render('trashCourse', {
                    courses: handleData.handleArray(courses),
                })
            )
            .catch(next);
    }

    // [patch] /me/restore/:id {
    restore(req, res, next) {
        Course.restore({ _id: req.params.id }).then(() => res.redirect('back'));
    }
}

module.exports = new NewsController();
