const User = require('../model/User');
require('../../config/mongodb');

module.exports = {
    async addUser(ctx){
        try{
            var body = ctx.request.body;
            var user =new User();
            console.log('name=>',body)
            user.name = body.name;
            user.age = body.age;
            user.save();
            ctx.body = user;
        }catch(error){
            ctx.throw(error);
        }
    },


    async getUserList(ctx){
        try{
            var users = await User.find().populate("projects");
            ctx.body = {data: users};
        }catch(error){
            ctx.throw(error);
        }
    }

    // async test(ctx){
    //     try{
    //         var user = await User.create({name: "Yashwant", age: "12"});
    //         ctx.body = user;
    //     }catch(error){
    //         ctx.throw(error);
    //     }
    // }
}