import React, { useEffect } from 'react'
import { useTodo } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
    const {allTodo} = useTodo()

  return (
    <div>
        {/* <h1>TodoList</h1> */}
        <ul>{allTodo.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
        </ul> 
    </div>
  )
}

export default TodoList