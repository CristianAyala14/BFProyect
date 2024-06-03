import React from 'react'
import { useAuthContext } from '../contexts/authContex'
import { Navigate, Outlet } from 'react-router-dom'
export default function ProtectedRoutes() {
  const {user, isAuthenticated} = useAuthContext()
  if(!isAuthenticated){
    return <Navigate to="/login" replace/>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}
