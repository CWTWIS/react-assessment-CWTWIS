import React, { useEffect } from 'react'
import { useTodo } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
    const {allTodo} = useTodo()

  return (
    <div>
        <ul>{allTodo.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
        </ul> 
    </div>
  )
}

export default TodoList