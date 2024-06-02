import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Register from './pages/register/register'
import Login from './pages/login/login'
import { AuthProvider } from './contexts/authContex'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/profile" element={<h1>Home page</h1>}></Route>
          <Route path="/tasks" element={<h1>Tasks</h1>}></Route>
          <Route path="/add-task" element={<h1>Home page</h1>}></Route>
          <Route path="/tasks/:id" element={<h1>Home page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
