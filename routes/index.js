const express = require('express');
const console = require('console');
const router = express.Router();
const databaseUtils = require('../Utils/databaseUtils');

router.get('/', (req, res) => {
    databaseUtils.allTasks().then((tasks) => {
        res.render('index', {
            title: 'Task Manager',
            tasks: tasks
        });
    });
});

router.get('/add', (req, res) => {
    res.render('partials//form', {
        flag: true
    });
});

router.post('/add', (req, res) => {
    let taskData = req.body;
    databaseUtils.createTask(taskData).then(() => {
        res.redirect('/');
    });
});

router.get('/edit/:id', (req, res) => {
    const taskID = req.params.id;
    databaseUtils.findTaskById(taskID).then((task) => {
        res.render('partials//form', {
            flag: false,
            taskID: task._id,
            taskName: task.taskName,
            taskDescription: task.taskDescription,
            taskStatus: task.taskStatus,
            deadlineDate: task.deadline
        });
    });
});

router.post('/edit/:id', (req, res) => {
    const taskID = req.params.id;
    const taskData = req.body;
    console.log(taskID);
    console.log(taskData);
    databaseUtils.editTaskById(taskID, taskData).then(() => {
        res.redirect('/');
    });
});

router.get('/completed', (req, res) => {
    const status = 'Completed';
    databaseUtils.findTaskByStatus(status).then((tasks) => {
        res.render('completed', {
            tasks: tasks
        });
    });
});

router.get('/inprogress', (req, res) => {
    const status = 'In progress';
    databaseUtils.findTaskByStatus(status).then((tasks) => {
        res.render('inprogress', {
            tasks: tasks
        });
    });
});

router.get('/delete/:id', (req, res) => {
    const taskID = req.params.id;
    databaseUtils.deleteTask(taskID).then(() => {
        res.redirect('/');
    });
});

router.get('/search', (req, res) => {

});

module.exports = router;