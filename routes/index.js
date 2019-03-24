const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Task Manager'
    });
});

router.get('/add', (req, res) => {

});

router.post('/add', (req, res) => {

});

module.exports = router;