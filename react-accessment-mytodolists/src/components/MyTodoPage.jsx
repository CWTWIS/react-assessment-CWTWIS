import React from 'react'
import { useLogIn } from '../context/LogInContext'
import TodoInPut from './TodoInPut'
import TodoList from './TodoList'
// import MyTodoContextProvider from '../context/MyTodoContext'

function MyTodoPage() {
    const {LogOut} = useLogIn()
  return (
    // <MyTodoContextProvider>
        <div className='DefaultDiv'>
            {/* Todo Input */}
            <TodoInPut/>

            {/* Todo Item */}
            <TodoList/>
            <button onClick={()=>LogOut()}><h2>LOG OUT</h2></button>
        </div>
    // </MyTodoContextProvider>
  )
}

export default MyTodoPage