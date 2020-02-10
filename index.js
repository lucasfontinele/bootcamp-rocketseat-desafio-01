const express = require("express");
const router = require("./src/api/router");
const middlewares = require("./src/middlewares");

const server = express();

server.use(express.json());

// API Stats
server.use(middlewares.requestCounter);

// Middlewares
server.use(router);
server.use(middlewares.notFound);

server.listen(80, () => {
  console.log("API running at: http://localhost");
});
