const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

// Import routes
const projectRoutes = require("./routes");

// Use routes
app.use("/api", projectRoutes);  // API base route

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
