const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/taskController');
const taskMiddleware = require('./middlewares/taskMiddleware');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddleware.validateBody, tasksController.createTask);

module.exports = router;