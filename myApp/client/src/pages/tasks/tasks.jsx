import React from 'react'
import { useAuthContext } from '../../contexts/authContex';

export default function Tasks() {
  const {user} = useAuthContext()
  console.log(user)

  return (
    <div>
      <h1>WELCOME TO YOUR TASK PAGE: {user.username}</h1>
    </div>
  )
}

// secuencia de error 1 ) yo cuando refresco tasks, se carga el context nuevamente
// e inicialmente setea la variable isAuthenticated en false, (mili segundo a login)
// , luego usa el use effect donde seteo a true esta variable, y estando en login ese mili segundo 
// me envia a task nuevamente por que en login.jsx tengo el navigate a tasks.

// cuando quiero pasar de tasks a add tasks, se genera el mismo procedimiento, en el que se carga el context en 
// add tasks, y me envia a login un mili segundo, ese mili segundo se setea en true nuevamente, pero estando en login me envia a tasks . 