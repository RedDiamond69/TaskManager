const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Task Manager'
    });
});

router.get('/add', (req, res) => {
    res.render('partials//addForm');
});

router.post('/add', (req, res) => {

});

router.get('/completed', (req, res) => {

});

router.get('/inprogress', (req, res) => {

});

router.get('/search', (req, res) => {

});

module.exports = router;