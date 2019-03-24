const express = require('express');
const path = require('path');
const console = require('console');
const logger = require('morgan');
const app = express();
const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, './node_modules/jquery/dist')));
app.use('/', indexRouter);

app.use((req, res, next) => {
    let err = new Error('Page not found.');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        title: 'Error' + err.status,
        status: err.status,
        message: err.message
    });
    next();
});

app.listen(3000, () => {
    console.log('Server start listening on port number 3000.');
});