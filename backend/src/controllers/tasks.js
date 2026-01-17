const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/asyncs");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const getTask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: `task not found of id ${taskId}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res , next) => {
  const taskId = req.params.id;
  const task = await Task.findByIdAndDelete(taskId);

  if (!task) {
    const error = new Error("Not found");
      error.status = 404;
      return next(error)
    return res.status(404).json({ msg: `task not found with id ${taskId}` });
  }
  res.status(200).json({ msg: "task deleted succesfully", task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findOneAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
const error = new Error("Not found");
      error.status = 404;
      return next(error)
  }

  res.status(200).json({ msg: "updated succesfully", task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
