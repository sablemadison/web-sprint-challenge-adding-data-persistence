const express = require('express');

const projectRouter = require('../projects/projects-Router');
const resourceRouter = require('../resources/resource-Router');
const taskRouter = require('../tasks/tasks-Router');

const server = express();

server.use(express.json());

server.use('/api/projects',  projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;