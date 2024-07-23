import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../../contexts/authContex';
import { useNavigate , Link} from 'react-router-dom';

export default function Login() {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const {singIn, isAuthenticated, registerErrors} = useAuthContext()
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated){
      navigate("/alltasks")
    }
  },[isAuthenticated])

  const onSubmit = handleSubmit( async(user) => {
    singIn(user)
  });

  return (
    <div className='flex flex-col h-[calc(100vh-100px)] items-center justify-center '>
      {
        registerErrors.map((error, i)=>(
          <div className='bg-red-500 p-2 text-white rounded-md' key={i}>{error}</div>
        ))
      }
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <form onSubmit={onSubmit}>
          <input type="email" {...register("email", {required: true})}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='email'/>
          {errors.email && <p className='text-red-500'>Email is required.</p>}        
          <input type="password" {...register("password", {required: true})}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='password'/>
          {errors.password && <p className='text-red-500'>Password is required.</p>}
          <button type='submit'>Log In</button>
          <p className='flex gap-x-2 justify-between'>Don't have an account?.<Link to="/register" className="text-sky-500">Sing up</Link></p>
        </form>
      </div>
    </div>
  )
}
