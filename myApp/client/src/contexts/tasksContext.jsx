import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest} from "../api/task";


const tasksContext = createContext();



export function TaskProvider({children}){

    const [tasks, setTasks] =useState([])

    const createTask = async (task)=>{
        try {
            const res = await createTaskRequest(task)
        } catch (error) {
            console.log(error)
        }
        
    }

    const getTasks = async ()=>{
        try {
            const res = await getTasksRequest()
            setTasks(res.message)
           
            
        } catch (error) {
            console.log(error)  
        }
        
    }

    const deleteTask = async (id)=>{
        try {
            const res = await deleteTaskRequest(id);
            if(res.status===200){
                const newTaskList = tasks.filter(el=>el.id !== id ) 
                setTasks(newTaskList)
                
            }
        } catch (error) {
            console.log(error)  
        }
    }

    const getTask = async (id)=>{
        try {
            const res = await getTaskRequest(id);
            const TaskToEdit = res.message
            return TaskToEdit;
        } catch (error) {
            console.log(error)  
        }
    }

    const updateTask = async (id, task )=>{
        try {
            const res = await updateTaskRequest(id, task)
            return res;
        } catch (error) {
            console.log(error)
        }
    }




    return(
        <tasksContext.Provider value={{tasks, createTask, deleteTask, getTasks, getTask, updateTask}}>
            {children}
        </tasksContext.Provider>
    )
    
}

export const useTasksContext = () => {
    const context = useContext(tasksContext)
    if(!context){
        throw new Error("useAuthContext must be used within an AuthProvider")
    }
    return context;
}