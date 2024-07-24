import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useTasksContext } from '../../contexts/tasksContext';
import { useEffect } from 'react';

export default function EditTask() {

  const navigate = useNavigate()
  const {register, handleSubmit, setValue} = useForm();
  const {updateTask,getTask} = useTasksContext()
  const params = useParams()


  const onSubmit = handleSubmit((updatedtask)=>{
    const res = updateTask(params.id, updatedtask)
    navigate("/alltasks") ;
  })

  useEffect(()=>{

    async function loadTask(){
      if(params.id){
        const TaskToEdit = await getTask(params.id) 
        setValue("title", TaskToEdit.title);
        setValue("description", TaskToEdit.description)
      }
    }


    loadTask();
  },[])

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <h1>Edit Task: </h1>

      <form onSubmit={onSubmit}>
        
        <input type="text" placeholder='title' {...register("title")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus/>
        
        <textarea rows="3" placeholder="description" {...register("description")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' ></textarea>
        
        <button>Save</button>
      </form>


    </div>
  )
}

