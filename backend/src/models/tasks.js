const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "must provide a name"],
        trim: true,
        maxlength:[20 , "cannot be more than 20 characters"],        
    },
    completed: {
        type: Boolean,
        defalt:false,
    }
})

const task = mongoose.model('task', taskSchema);

module.exports = task;