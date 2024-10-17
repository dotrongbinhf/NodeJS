
const Course = require('../models/Course');
const { mutipleMongooseToObject, multipleMongooseToObject } = require('../../util/mongoose.js')

class SiteController {

    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;