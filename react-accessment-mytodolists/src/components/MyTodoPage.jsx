import React from 'react'
import { useLogIn } from '../context/LogInContext'
import TodoInPut from './TodoInPut'
import TodoItem from './TodoItem'
// import MyTodoContextProvider from '../context/MyTodoContext'

function MyTodoPage() {
    const {LogOut} = useLogIn()
  return (
    // <MyTodoContextProvider>
        <div className='DefaultDiv'>
            {/* Todo Input */}
            <TodoInPut/>

            {/* Todo Item */}
            <TodoItem/>
            <button onClick={()=>LogOut()}><h2>LOG OUT</h2></button>
        </div>
    // </MyTodoContextProvider>
  )
}

export default MyTodoPage