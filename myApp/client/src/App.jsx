import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'

import Home from "./pages/home/home"
import Register from './pages/register/register'
import Login from './pages/login/login'
import Profile from './pages/profile/profile'
import NewTask from './pages/newTask/newTask'
import AllTasks from './pages/allTasks/allTasks'
import { AuthProvider } from './contexts/authContex'
import { TaskProvider } from './contexts/tasksContext'

import ProtectedRoutes from './components/protectedRoutes'

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>

            <Route element={<ProtectedRoutes/>}>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/alltasks" element={<AllTasks/>}></Route>
              <Route path="/newtask" element={<NewTask/>}></Route>
              <Route path="/alltasks/:id" element={<AllTasks/>}></Route>
            </Route>
            
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider> 
  )
}
