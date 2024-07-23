import { createContext, useContext, useState, useEffect } from "react";
import { createTaskRequest, getTasksRequest} from "../api/task";


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




    return(
        <tasksContext.Provider value={{tasks, createTask, getTasks}}>
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