import React from 'react'
import { useAuthContext } from '../contexts/authContex'
import { Navigate, Outlet } from 'react-router-dom'


export default function ProtectedRoutes() {
  
  const {user, loading, isAuthenticated} = useAuthContext()

  if(loading) return <h1>Loading...</h1>

  if(!loading && !isAuthenticated){
    return <Navigate to="/login" replace/>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}
