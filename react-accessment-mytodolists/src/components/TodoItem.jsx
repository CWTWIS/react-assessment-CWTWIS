import React, {useState} from "react";
import TodoForm from "./TodoForm";
import { useTodo } from "../context/TodoContext";

function TodoItem({todo}) {
  const {deleteTodoById, editTodoById} = useTodo()
  const [isEdit,setIsEdit] = useState(false)
  const handleEdit = () => {
    setIsEdit(true)
  }
  const onClose = () => {
    setIsEdit(false)
  }
  const updateStatus = () => {
    const updateTodo = {...todo, status:!todo.status}
    editTodoById(todo.id, updateTodo)
}
  return (
    <div>
      {!isEdit ? (
        <div className="TodoItem">
          <div className="TodoItem__list">
            <div className="TodoItem__list__content">
              <button>check</button>
              <span 
              onClick={()=>handleEdit()}
              >
                {todo.task}
              </span>
            </div>

            <div className="TodoItem__list__button">
              {/* <button
              // onClick={()=>handleEdit()}
              >
                edit
              </button> */}
              <button
              onClick={(()=> deleteTodoById(todo.id))}
              >
                x
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <TodoForm 
            oldTodo={todo}
            onClose={onClose} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
