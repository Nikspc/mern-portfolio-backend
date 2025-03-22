const express = require("express");
const router = express.Router();
const { Profile, Project } = require("./models");

// Fetch profile details
router.get("/profile", async (req, res) => {
    try {
        const profile = await Profile.findOne();
        res.json(profile);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Create or update profile
router.post("/profile", async (req, res) => {
    try {
        const profile = await Profile.findOneAndUpdate({}, req.body, { upsert: true, new: true });
        res.json(profile);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Add Projects
router.post("/projects", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).send(project);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Get projects list
router.get("/projects", async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

// API to update a project by ID
app.put("/api/projects/:id", async (req, res) => {
    try {
        const { title, description, technologies, github, liveDemo } = req.body;
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            { title, description, technologies, github, liveDemo },
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.json({ message: "Project updated successfully", project: updatedProject });
    } catch (error) {
        res.status(500).json({ message: "Error updating project" });
    }
});

// API to delete a project by ID
app.delete("/api/projects/:id", async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);

        if (!deletedProject) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting project" });
    }
});
