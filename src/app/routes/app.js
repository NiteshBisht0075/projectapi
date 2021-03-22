function getHomePage(ctx) { ctx.body = 'Home page v1'; }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/' });
    router.get('home','/', getHomePage);
    app.use(router.routes()).use(router.allowedMethods());
}