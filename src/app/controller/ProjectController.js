const User = require('../model/User');
const Project = require('../model/Project');
module.exports = {
    async addProject(ctx){
        try{
            var body = ctx.request.body;
            var project = new Project();
            project.name = body.name;
            project.project_type = body.project_type;
            project.users = body.users;
            project.save();
            ctx.body = {project};
        }
        catch(error){
            ctx.throw(error);
        }
    },

    async getProjectList(ctx){
        try{
            var projects = await Project.find().populate("users");
            ctx.body = {data: projects};
        }catch(error){
            ctx.throw(error);
        }
    },

// update
    async test(ctx){
        try{
            var project = await Project.findOne({_id: "6058877d7d023037bc9dd838"});
            project.users.push("605886b67d023037bc9dd837");
            project.save();
            ctx.body = project;
        }catch(error){
            ctx.throw(error);
        }
    },

   async getProject(ctx) {
        console.log("hello")
        try {
            const _id = ctx.request.project.params.id;
            const projectData = await Project.findById(_id);
            if (!projectData) {
                return ctx.body;
            }
            else {
                ctx.body =  projectData;
            }
        }
        catch (error) {
            ctx.throw(error);
        }
    }
}