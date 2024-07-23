import React, { useEffect } from 'react'
import { useTasksContext } from '../../contexts/tasksContext';
import { useForm } from 'react-hook-form'

export default function AllTasks() {

  const {getTasks, tasks} = useTasksContext() 

  useEffect(()=>{
    getTasks();
  },[])

  return (
    <div>
      {
        tasks.map((el)=>(
          <div key={el._id}>
            <h1>{el.tittle}</h1>
            <p>{el.description}</p>
          </div>
        ))
      }
    </div>
  )
}
