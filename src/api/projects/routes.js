const express = require("express");
const controller = require("./controller");

const routes = express.Router();

routes.route("/").get(controller.getProjects);

routes.route("/").post(controller.addProjects);
routes
  .route("/:id/tasks")
  .post(controller.checkProjectExists, controller.addTask);

routes.route("/:id").put(controller.checkProjectExists, controller.updateTitle);

routes
  .route("/:id")
  .delete(controller.checkProjectExists, controller.deleteProject);

module.exports = routes;
