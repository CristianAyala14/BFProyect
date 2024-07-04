import { createContext } from "react";

const tasksContext = createContext();

export const useTasks = () => {
    const context = useContext(TasksContext)
}



export function TaskProvider({children}){
    return(
        <tasksContext.Provider value={{}}>
            {children}
        </tasksContext.Provider>
    )
}