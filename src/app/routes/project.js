const controller = require('../controller/ProjectController');
require('../../config/mongodb')

// const body=require('koa-body')

function getProjectHome(ctx) { ctx.body = "Project Home Page" }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/project' });
    router.get('project', '/', getProjectHome);

    router.post('/addproject',controller.addProject);

    router.get('/list', controller.getProjectList);
    // router.get('/getlist', controller.getProject);
    router.get('/test', controller.test);

    // router.get('/readProject',controller.readProject)
    // app.use(body({ multipart: true }))
    app.use(router.routes()).use(router.allowedMethods());
}
