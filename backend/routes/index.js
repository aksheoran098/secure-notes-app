const express = require("express");
const authRoutes = require("./auth");
const notesRoutes = require("./notes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/notes", notesRoutes);

module.exports = router;
