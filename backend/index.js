// Core imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routes imports
const apiRoutes = require("./routes"); // index.js automatically

const app = express();
const PORT = process.env.PORT || 4000;

// app.use(cors());
app.use(express.json());
app.use("/api/v1", apiRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error);
  });
