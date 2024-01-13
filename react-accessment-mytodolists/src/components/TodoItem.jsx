import React, {useState} from "react";
import TodoForm from "./TodoForm";
import { useTodo } from "../context/TodoContext";

function TodoItem({todo}) {
  const {deleteTodoById, editTodoById} = useTodo()
  const [status, setStatus] = useState(todo.status)
  const [isEdit,setIsEdit] = useState(false)
  const handleEdit = () => {
    setIsEdit(true)
  }
  const onClose = () => {
    setIsEdit(false)
  }
  const updateStatus = () => {
    console.log(todo.status);
    const updateTodo = {...todo, status:!todo.status}
    console.log(updateTodo);
    setStatus(!todo.status)
    editTodoById(todo.id, updateTodo)
  }
  return (
    <div>
      {!isEdit ? (
        <div className="TodoItem">
          <div className="TodoItem__list">
            <div className="TodoItem__list__content">
              {!status? 
              (<button
              className="uncheck_btn"
              onClick={updateStatus}
              >
              </button>)
               : 
              (<button
              className="check_btn"
              onClick={updateStatus}
              >
                &#10003;
              </button>)
              }

              {!status? 
              (<span onClick={()=>handleEdit()}>
                <p> {todo.task} </p>
               
              </span>)
              :
              (<span onClick={()=>handleEdit()}>
              <p style={{textDecoration: 'line-through', 
                textDecorationColor: "#9494B8", 
                textDecorationThickness:'3px'}}> 
                {todo.task} 
              </p>
              </span>)
              }
              
            </div>

            <div>
              <button
              className="del_btn"
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
