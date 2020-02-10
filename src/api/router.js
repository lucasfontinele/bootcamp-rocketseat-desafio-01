const express = require("express");
const router = express.Router();

// Paths
const projects = require("./projects/routes");

/**
 * GET status
 */
router.get("/", (req, res) =>
  res.json({
    message: "Server running successfully",
    running: true
  })
);

/**
 * PATH /projects
 */
router.use("/projects", projects);

module.exports = router;
