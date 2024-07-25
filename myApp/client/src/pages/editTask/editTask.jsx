import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useTasksContext } from '../../contexts/tasksContext';
import { useEffect } from 'react';
//dayjs
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)
export default function EditTask() {

  const navigate = useNavigate()
  const {register, handleSubmit, setValue} = useForm();
  const {updateTask,getTask} = useTasksContext()
  const params = useParams()


  const onSubmit = handleSubmit((updatedtask)=>{
    const res = updateTask(params.id, {...updatedtask, date: dayjs.utc(updatedtask.date).format()})
    navigate("/alltasks") ;
  })

  useEffect(()=>{

    async function loadTask(){
      if(params.id){
        const TaskToEdit = await getTask(params.id) 

        const newTaskToEdit = {
          ...TaskToEdit, date: dayjs.utc(TaskToEdit.date).format("YYYY-MM-DD") //FORMATO INVVERTIDO SI ME LO TOMA
        }

        setValue("title", newTaskToEdit.title);
        setValue("description", newTaskToEdit.description);
        console.log(newTaskToEdit.date)

        setValue("date", newTaskToEdit.date );

      }

    }


    loadTask();
  },[])

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <h1>Edit Task: </h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" placeholder='title' {...register("title")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus/>
        <label htmlFor="description">Description:</label>
        <textarea rows="3" placeholder="description" {...register("description")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' ></textarea>
        <label htmlFor="date">Date:</label>
        <input type="date"  placeholder="date"{...register("date")}  className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
        <button className='bg-indigo-500 px-3 py-2'>Save</button>
      </form>


    </div>
  )
}

