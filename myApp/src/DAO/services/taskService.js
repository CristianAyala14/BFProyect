import taskModel from "../models/taskModel.js";

class taskService{
  getAll = async (userId) => {
    let tasks = await taskModel.find({ user: userId }).populate("user");
    return tasks;
  }
  getBy = async (taskId) => {
    let task = await taskModel.findOne({_id: taskId}).populate("user")
    return task;
  }
  create = async (newTask) => {
    let created = await taskModel.create(newTask)
    return created;
  }
  delete = async (taskId) => {
    let taskDeleted = await taskModel.findByIdAndDelete(taskId)
    return taskDeleted;
  }
  update = async (taskId, updatedTask) => {
    let taskUpdated = await taskModel.findByIdAndUpdate(taskId,updatedTask, { new: true })
    return taskUpdated;
  }
  
  
}

export {taskService};