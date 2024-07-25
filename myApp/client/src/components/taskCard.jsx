import React from 'react'
import { useTasksContext } from '../contexts/tasksContext'
import { Link } from 'react-router-dom';
//dayjs
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)


export default function TaskCard({task}) {

  const {deleteTask} = useTasksContext();
  const haddleDeleteClick = (id)=>{
    deleteTask(id);
    window.location.reload();
  }
  return (
    <div className='bg-zinc-800 max-w-md w-full p-4 rounded-md shadow-md'>
      <header className='flex justify-between mb-4'>
        <h1 className='text-2xl font-bold text-white'>{task.title}</h1>
        <div className='flex gap-x-2'>
          <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md' onClick={()=>{haddleDeleteClick(task._id)}}>Delete</button>
          <Link to={`/alltasks/${task._id}`} className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'>Edit</Link>
        </div>
      </header>
      <p className='text-slate-300'>{task.description}</p>
      <p>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  )
}
