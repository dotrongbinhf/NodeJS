const newsRouter = require('./news');
const courseRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {

    app.use('/news', newsRouter);

    app.use('/courses', courseRouter);

    // '/' always the last
    app.use('/', siteRouter);

}

module.exports = route;
