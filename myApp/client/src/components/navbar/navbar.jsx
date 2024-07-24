import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useAuthContext } from '../../contexts/authContex'

export default function Navbar() {

  const {isAuthenticated, user, logOut} = useAuthContext();
  
  return (
    <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
      <h1 className='text-2xl font-bold'><Link to="/">Task Manager</Link></h1>
      <ul className='flex gap-x-2'>  
        {isAuthenticated? (
          <>
            <li>Welcome {user.username}</li>
            <li><Link to="/newtask" >New Task</Link></li>
            <li><Link to="/alltasks">My Tasks</Link></li>
            <li><Link to="/login" onClick={()=>{logOut()}} className='bg-indigo-500 px4 py-1 rounded-sm'>Log out</Link></li>

          </>
        ) : (
          <>
            <li><Link to="/login" className='bg-indigo-500 px4 py-1 rounded-sm'>Login</Link></li>
            <li><Link to="/register" className='bg-indigo-500 px4 py-1 rounded-sm'>Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}
