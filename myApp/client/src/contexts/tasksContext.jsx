import { createContext, useContext, useState } from "react";
import { createTaskRequest } from "../api/task";


const tasksContext = createContext();



export function TaskProvider({children}){

    const [tasks, setTasks] =useState([])

    const createTask = async (task)=>{
        const res = await createTaskRequest(task)
        console.log(res)
    }

    return(
        <tasksContext.Provider value={{tasks, createTask}}>
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