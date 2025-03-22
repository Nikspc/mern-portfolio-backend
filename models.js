const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: String,
    role: String,
    description: String,
    skills: [String],
    github: String,
    linkedin: String,
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    technologies: [String],
    githubLink: String,
    liveDemo: String,
});

const Profile = mongoose.model("Profile", ProfileSchema);
const Project = mongoose.model("Project", ProjectSchema);

module.exports = { Profile, Project };
