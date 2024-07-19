import React from 'react'
import { useAuthContext } from '../../contexts/authContex';

import { useForm } from 'react-hook-form'
import { useTasksContext } from '../../contexts/tasksContext';


export default function Tasks() {
  const {user} = useAuthContext()
  const {register, handleSubmit} = useForm();
  const {createTask} = useTasksContext()

  const onSubmit = handleSubmit((newtask)=>{
    createTask(newtask)
  })

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <h1>WELCOME TO YOUR TASK PAGE: {user.username}</h1>

      <form onSubmit={onSubmit}>
        
        <input type="text" placeholder='Tittle' {...register("tittle")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus/>
        
        <textarea rows="3" placeholder="Description" {...register("description")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' ></textarea>
        
        <button>Save</button>
      </form>


    </div>
  )
}

