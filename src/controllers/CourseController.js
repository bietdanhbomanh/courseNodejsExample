const Course = require('../models/Course');
const handleData = require('../util/handleMongoData');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: handleData.handleEle(course),
                })
            )
            .catch(next);
    }

    // GET UI pdate course /course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //POST -> create course  /course/store
    store(req, res, next) {
        req.body.img = `https://i.ytimg.com/vi/${req.body.video}/hqdefault.jpg`;
        const course = new Course(req.body);
        course.save().then(() => res.redirect(`/course/${course.slug}`));
    }

    // Delete /course/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id }).then(() => res.redirect('back'));
    }

    destroyfrv(req, res, next) {
        Course.deleteOne({ _id: req.params.id }).then(() =>
            res.redirect('back')
        );
    }

    selectMany(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({
                    _id: { $in: req.body.selectCourse },
                }).then(() => res.redirect('back'));
                break;

            default:
                res.render('/');
                break;
        }
    }
}
module.exports = new CourseController();
