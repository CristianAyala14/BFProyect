import React, { useEffect } from 'react'
//utilizaremos el modulo react hook form, nos permite decirle que tenemos un formulario y que queremos que maneje el cambio de estado y la validacion.
import {useForm} from "react-hook-form"
import { useAuthContext } from '../../contexts/authContex';
import { useNavigate , Link} from 'react-router-dom';

export default function Register() {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const {singUp, isAuthenticated, registerErrors} = useAuthContext()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(isAuthenticated){
      navigate("/alltasks")
    }
  },[isAuthenticated])

  const onSubmit = handleSubmit( async(user) => {
    singUp(user)
  });

  return (
    <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center'>

      {
        registerErrors.map((error, i)=>(
          <div className='bg-red-500 p-2 text-white rounded-md' key={i}>{error}</div>
        ))
      }
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <h1 className='text-2xl font-bold'>Register</h1>
        <form onSubmit={onSubmit}>
          <input type="text" {...register("username", {required: true})} 
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='username'/>
          {errors.username && <p className='text-red-500'>Username is required.</p>}
          <input type="email" {...register("email", {required: true})}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='email'/>
          {errors.email && <p className='text-red-500'>Email is required.</p>}        
          <input type="password" {...register("password", {required: true})}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='password'/>
          {errors.password && <p className='text-red-500'>Password is required.</p>}
          <button type='submit'>Register</button>
          <p className='flex gap-x-2 justify-between'>Already have an account?.<Link to="/login" className="text-sky-500">Sing in</Link></p>
        </form>
      </div>
    </div>
  )
}
