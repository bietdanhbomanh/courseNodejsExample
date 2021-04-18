const Course = require('../models/Course');
const handleData = require('../util/handleMongoData');

class siteController {
    // [GET] /
    index(req, res, next) {
        // res.render("home");
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: handleData.handleArray(courses),
                });
            })
            .catch(next);
    }
    // [GET] form

    search(req, res) {
        res.render('form');
    }
}
module.exports = new siteController();
