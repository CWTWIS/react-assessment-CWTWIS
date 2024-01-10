import React from "react";
import TodoForm from "./TodoForm";
import { useMyTodo } from "../context/MyTodoContext";
function TodoItem({todo}) {
    console.log("Todo at todo item", todo);
    const {isEdit, handleEdit, editTodoById, deleteTodoById} = useMyTodo()
    const updateStatus = () => {
        const updateTodo = {...todo, status:!todo.status}
        editTodoById(todo.id, updateTodo)
    }

  return (
    <>   
        {!isEdit ? (
            <div className="TodoItem">

            <div className="TodoItem__list">
                <div className="TodoItem__list__content">
                <button>check</button>
                <h3 onClick={handleEdit}>{todo.task}</h3>
                </div>

                <div className="TodoItem__list__button">
                <button onClick={ ()=> deleteTodoById(todo.id)}>x</button>
                </div>
            </div>
            </div>
        )
        :
        (
            <div>
                <div>
                    <TodoForm oldTodo={todo}/>
                </div>
            </div>
        )}



    </>
  );
}

export default TodoItem;
