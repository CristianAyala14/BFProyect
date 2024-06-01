import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/register/registerPage'
import LoginPage from './pages/login/loginPage'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/profile" element={<h1>Home page</h1>}></Route>
        <Route path="/tasks" element={<h1>Home page</h1>}></Route>
        <Route path="/add-task" element={<h1>Home page</h1>}></Route>
        <Route path="/tasks/:id" element={<h1>Home page</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
