import React from 'react'
import { useTasksContext } from '../contexts/tasksContext'
import { Link } from 'react-router-dom';

export default function TaskCard({task}) {

  const {deleteTask} = useTasksContext();
  const haddleDeleteClick = (id)=>{
    deleteTask(id);
    window.location.reload();
  }
  return (
    <div className='bg-zinc-800 max-w-m w-full p-10 rounded-md'>
      <header className='flex justify-between'>
        <h1 className='text-2xl font-bold'>{task.title}</h1>
        <div>
          <button className='flex ga-x-2 items-center' onClick={()=>{haddleDeleteClick(task._id)}}>Delete</button>
          <Link to={`/alltasks/${task._id}`}>Edit</Link>
        </div>
      </header>
      <p className='text-slate-300'>{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  )
}
