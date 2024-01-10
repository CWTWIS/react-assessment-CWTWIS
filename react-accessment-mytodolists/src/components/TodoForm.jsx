import React, { useState } from 'react'
import { useMyTodo } from '../context/MyTodoContext'
function TodoForm({oldTodo}, {id}) {
    const {onClose, editTodoById, addTodo, task, setIsError} = useMyTodo();
    const [text, setText] = useState(oldTodo?.task || '')

    const [isErrorEdit, setIsErrorEdit] = useState(false)

    const handleTextChange = (event) => {
        console.log('text', text);
        setText(event.target.value)
    }

    // const handleEditSubmit = (event) => {
    //     event.preventDefault();
    //     onClose()
    // }

    const handleSubmitTask = (event) => {
        event.preventDefault();
        console.log("submit", task);
        console.log('old Todo', oldTodo);
        if (task.trim() === ""){
            setIsErrorEdit(true)
        } else {
            const newTodo = {...oldTodo, task: text}
            console.log('new todo', newTodo);
            editTodoById(newTodo.id, newTodo) //send params back -> see context
        }
            setIsErrorEdit(false)
            onClose()
      };

  return (
    <div>
        <form 
        onSubmit={handleSubmitTask}
        >
            <input type='text' value={text} onChange={handleTextChange}></input>
            {isErrorEdit && <h3>ERROR: PLEASE TYPE SOMETHING</h3>}
        </form>
    </div>
  )
}
export default TodoForm