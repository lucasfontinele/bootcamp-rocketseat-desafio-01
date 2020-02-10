const projects = [];

// ----- Middleware -----
exports.checkProjectExists = function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const index = projects.findIndex(prop => prop.id === id);

  if (index <= -1) {
    return res.status(400).json({
      error: "This project doesn't exist."
    });
  }

  req.projectIndex = index;

  next();
};
// ----- Middleware -----

exports.addProjects = function(req, res) {
  const { id, title } = req.body;

  projects.push({
    id,
    title,
    tasks: []
  });

  return res.status(201).json(projects);
};

exports.getProjects = function(_, res) {
  return res.json(projects);
};

exports.updateTitle = function(req, res) {
  const { title } = req.body;
  const { projectIndex } = req;

  projects[projectIndex].title = title;

  return res.json(projects[projectIndex]);
};

exports.deleteProject = function(req, res) {
  const { projectIndex } = req;

  projects.splice(projectIndex, 1);

  return res.json(projects);
};

exports.addTask = function(req, res) {
  const { projectIndex } = req;
  const { title } = req.body;

  projects[projectIndex].tasks.push(title);

  return res.status(201).json(projects[projectIndex]);
};
