const User = require('./User');
const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    name: String,
    project_type: {
        type: String,
        enum: ['SB','Github'],
        default: 'SB'
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]
});

module.exports = mongoose.model("projects", projectSchema);