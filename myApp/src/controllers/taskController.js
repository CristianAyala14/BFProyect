import { taskDao } from "../DAO/index.js"

class taskController{

  
    static getTasks = async(req,res)=>{
        try {
            const userId = req.user.id
            const tasks = await taskDao.getAll(userId)

            if(!tasks) return res.status(404).json({message: "Tasks not founded."})
            return res.send({
                status: "success",
                message: tasks
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        }
        
    }
    
    static getTask = async(req,res)=>{
        try {
            const taskId = req.params.id;
            const task = await taskDao.getBy(taskId)
            console.log(task)

            if(!task) return res.status(404).json({message: "Task not founded."})
            return res.send({
                status: "success",
                message: task
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        }
        
    }

    static createTask = async(req,res)=>{
        try {
            const {tittle, description, date} = req.body;
            const userId = req.user.id;
            const newTask = {
                tittle: tittle,
                description: description,
                date: date,
                user: userId
            } 

            const taskCreated = await taskDao.create(newTask)
            return res.send({
                status: "success",
                message: taskCreated
            })

        } catch (error) {
            res.status(500).json({message: error.message})
        }
      

    }

    static updateTask = async(req,res)=>{
        try {
            const taskId = req.params.id;
            const {tittle, description, date} = req.body;
            const updatedTask = {
                tittle: tittle,
                description: description,
                date: date
            }
            const taskUpdated = await taskDao.update(taskId, updatedTask)
            if(!taskUpdated) return res.status(404).json({message: "Task could not be updated."})
            return res.send({
                status: "success",
                message: taskUpdated
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        } 
    }

    static deleteTask = async(req,res)=>{
        try {
            const taskId = req.params.id;
            const taskDeleted = await taskDao.delete(taskId)
            if(!taskDeleted) return res.status(404).json({message: "Task could not be deleted."})
            return res.send({
                status: "success",
                message: "Task deleted successfully."
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

export {taskController};
