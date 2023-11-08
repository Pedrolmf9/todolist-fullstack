const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/taskController');
const taskMiddleware = require('./middlewares/taskMiddleware');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddleware.validateTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', taskMiddleware.validateTitle, taskMiddleware.validateStatus, tasksController.updateTask);

module.exports = router;