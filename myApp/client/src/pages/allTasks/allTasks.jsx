import React, { useEffect } from 'react'
import { useTasksContext } from '../../contexts/tasksContext';
import TaskCard from '../../components/taskCard';

export default function AllTasks() {

  const {getTasks, tasks} = useTasksContext() 

  useEffect(()=>{
    getTasks();
  },[])

  if(tasks.length ===0) return (<h1>...</h1>)

  return (
    <div className='grid sm:grid-cols-2 grid- md:grid-cols-3 gap-2'>
      {
        
        tasks.map((task)=>(
          <TaskCard task={task} key={task._id}/>
        ))
      }
    </div>
  )
}
