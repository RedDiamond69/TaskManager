const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    taskStatus: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    filename: {
        type: String
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;