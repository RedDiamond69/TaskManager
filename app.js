const express = require('express');
const path = require('path');
const console = require('console');
const app = express();
const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('Server start listening at port 3000.');
});