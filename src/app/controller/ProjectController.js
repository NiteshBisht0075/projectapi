const User = require('../model/User');
const Project = require('../model/Project');
module.exports = {
        /**
         * Function to add project
         * @param ctx(Projectname, Projecttype)
         * Created By: Nitesh Bisht
         * Created At: 13,Mar 2021
         */
    async addProject(ctx) {
        try {
            var body = ctx.request.body;
            var project = new Project();
            project.name = body.name;
            project.project_type = body.project_type;
            project.users = body.users;
            project.save();
            ctx.body = { project };
        }
        catch (error) {
            ctx.throw(error);
        }
    },
         /**
         * Function to get projects list
         * @param ctx(Projectname, Projecttype)
         * Created By: Nitesh Bisht
         * Created At: 22,Mar 2021
         */

    async getProjectList(ctx) {
        try {
            var projects = await Project.find().populate("users");
            ctx.body = { data: projects };
        } catch (error) {
            ctx.throw(error);
        }
    },

         /**
         * Function to assign project to user
         * @param ctx(Projectname, Projecttype)
         * Created By: Nitesh Bisht
         * Created At: 13,Mar 2021
         */
    async test(ctx) {
        try {
            var project = await Project.findOne({ _id: "6058877d7d023037bc9dd838" });
            project.users.push("605886b67d023037bc9dd837");
            project.save();
            ctx.body = project;
        } catch (error) {
            ctx.throw(error);
        }
    },
         /**
         * Function to update project
         * @param ctx(Projectname, Projecttype)
         * Created By: Nitesh Bisht
         * Created At: 13,Mar 2021
         */

    async updateProject(ctx) {
        try {
            var _id = ctx.request.params.id;
            var updateProject = await Project.findByIdAndUpdate(_id, ctx.request.body)
            ctx.body = { updateProject }
        }
        catch (error) {
            ctx.throw(error)
        }
    },
        /**
         * Function to get project
         * @param ctx(Projectname, Projecttype)
         * Created By: Nitesh Bisht
         * Created At: 13,Mar 2021
         */

    async getProject(ctx) {
        console.log("hello")
        try {
            const _id = ctx.request.project.params.id;
            const projectData = await Project.findById(_id);
            if (!projectData) {
                return ctx.body;
            }
            else {
                ctx.body = projectData;
            }
        }
        catch (error) {
            ctx.throw(error);
        }
    }
}