module.exports = function(app, Router){
    require('./app/routes/app')(app, Router);
    require('./app/routes/user')(app, Router);
    require('./app/routes/project')(app, Router);
}