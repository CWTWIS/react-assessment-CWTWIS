import React, {useState} from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm({oldTodo, onClose}) {
    // console.log(oldTodo);
    const {editTodoById} = useTodo()
    const [text, setText] = useState(oldTodo?.task || '')
    const [isErrorEdit, setIsErrorEdit] = useState(false)

    const handleTextChange = (event) => {
        console.log('text', text);
        setText(event.target.value)
        setIsErrorEdit(false)
    }

    const handleSubmitTask = (event) => {
        event.preventDefault();
        console.log("submit");
        console.log('old Todo', oldTodo);
        if (text.trim() === ""){
            setIsErrorEdit(true)
        } else {
                const newTodo = {...oldTodo, task: text}
                console.log('new todo', newTodo);
                editTodoById(newTodo.id, newTodo) //send params back -> see context
                setIsErrorEdit(false)
                onClose()
        }
      };
  return (
    <div>
      <form className="Form"
      onSubmit={handleSubmitTask}
      >
        <input 
        type="text" 
        value={text} 
        onChange={handleTextChange}
        >
        </input>
        {isErrorEdit && <h3>ERROR: PLEASE TYPE SOMETHING</h3>}
      </form>
    </div>
  );
}

export default TodoForm;
