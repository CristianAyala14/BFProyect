import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'

import Home from "./pages/home/home"
import Register from './pages/register/register'
import Login from './pages/login/login'
import Profile from './pages/profile/profile'
import Tasks from './pages/tasks/tasks'
import AddTasks from './pages/AddTasks/addTasks'

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
              <Route path="/add-task" element={<AddTasks/>}></Route>
              <Route path="/tasks" element={<Tasks/>}></Route>
              <Route path="/tasks/:id" element={<Tasks/>}></Route>
            </Route>
            
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider> 
  )
}
