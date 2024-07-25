import React from 'react'
import { useAuthContext } from '../../contexts/authContex';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useTasksContext } from '../../contexts/tasksContext';

//dayjs
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

export default function NewTask() {

  const navigate = useNavigate()
  const {user} = useAuthContext()
  const {register, handleSubmit} = useForm();
  const {createTask} = useTasksContext()

  const onSubmit = handleSubmit((newtask)=>{
    //si cuando creo no pongo una fecha se manda la fecha actual, si le pongo fecha queda esa fecha
    const newTaskValid = {
      ...newtask, date: newtask.date? dayjs.utc(newtask.date).format() : dayjs.utc().format()
    }
    console.log(newTaskValid)
    createTask(newTaskValid)
    navigate("/alltasks") ;
  })

  return (
    <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center '>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <h1 className='text-2xl font-bold'>Create Task: </h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" placeholder='title' {...register("title")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus/>
          <label htmlFor="description">Description:</label>
          <textarea rows="3" placeholder="description" {...register("description")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' ></textarea>
          <label htmlFor="date">Date:</label>
          <input type="date"  placeholder="date"{...register("date")}  className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
          <button>Save</button>
        </form>
      </div>
    </div>
    
  )
}

