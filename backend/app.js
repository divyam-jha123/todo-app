const express = require("express");
const app = express();
const tasks = require('./src/routes/tasks');
const path = require('path')
const connectDb = require('./db/connect')
require('dotenv').config()
const port = process.env.PORT ||  3001;

const notFound = require('./src/middleware/notFound')
const errorHandlerMiddleWare = require('./src/middleware/error-handler')

// middleware
app.use(express.json());

const frontendpath = path.join(__dirname, "..", "frontend")
app.use(express.static(frontendpath))

// routes
// app.get('/api/v1/tasks'); - get all the tasks
// app.post('/api/v1/tasks'); - create a new task
// app.get('/api/v1/tasks/:id') - get a single specific task
// app.patch('/api/v1/tasks/:id') - edit tasks
// app.delete('/ap1/v1/tasks/:id') - delete task

app.use('/api/v1/tasks', tasks);

app.use(notFound)
app.use(errorHandlerMiddleWare)

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, (err) => {
            console.log(`server is running on port ${port}...`);
        });
    } catch (error) {
        console.log(error)
    }
}

start();