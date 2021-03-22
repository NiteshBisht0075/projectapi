const Koa = require('koa');
const Router = require('koa-router');
require('dotenv').config();
const app = new Koa();
require('./src/bootstrap');
const koaBody = require('koa-body')
app.use(koaBody());
const port = process.env.PORT || 3000;
require('./src/router')(app, Router);
app.listen(port, () => { console.log(`listen to port ` + port) });