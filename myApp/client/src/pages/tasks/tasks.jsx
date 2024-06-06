import React from 'react'
import { useAuthContext } from '../../contexts/authContex';

export default function Tasks() {
  const {user, isAuthenticated} = useAuthContext()
  console.log(isAuthenticated)

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



// Para acceder a una vista protegida debemos setear en true el valor de isAuthenticated por el middelware de autorizacion. 
// Entonces puedo decir que la vista anterior es la que tiene que setear este valor y permitir el acceso.
// Cuando accedo a "tasks" desde login, login setea el valor isAuthenticated en true mediante la funcion "singIn" permitiendonos acceder a "tasks".
// Pero cuando queremos ir de "tasks" a "add-tasks", osea de una ruta protegia a otra, surgira un problema.
// No me dejara.Solo hace un salto de milisegundos a login y volvera a tasks!. Eso es por que cuando "tasks" carga, 
// vuelve a cargar el contexto en donde nuevamente se setea en false isAuthenticated y "tasks" al estar protegida por 
// el middelware de autorizacion, hara ese mini salto a login por los milisegundos que isAuthenticated este en false. 
// Ese milisegundo de salto al a vista login vuelve a cargare el contexto repitiendose lo anterior y seteando isAuthenticated de false a 
// true de nuevo. Y si isAuthenticated pasa a true en login, el useEffect en login te lleva a "tasks".
// Ahora bien, entendiendo el funcionamiento, necesito pasar de una ruta protegida a otra. Y para ello puedo hacer lo siguiente: 





// -Crear una funcion en el contexto que 
// permita navegar de una ruta protegida
// ya ingresada a otra ruta protegida. 
// Para ello, debe generarse una funcion que setee la variable
// isAuthenticated en true. 
