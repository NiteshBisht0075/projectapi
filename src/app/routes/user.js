const controller = require('../controller/UserController');
require('../../config/mongodb')
function getUserHome(ctx) { ctx.body = "User Home Page" }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/user' });
    router.get('user', '/', getUserHome);
    router.post('/addUser', controller.addUser);
    router.get('/list', controller.getUserList);
    app.use(router.routes()).use(router.allowedMethods());
}
