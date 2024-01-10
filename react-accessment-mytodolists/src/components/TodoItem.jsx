import React from "react";
import TodoForm from "./TodoForm";
import { useMyTodo } from "../context/MyTodoContext";
function TodoItem({todo}, {id}) {
    const {isEdit, handleEdit} = useMyTodo()
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
                <button>x</button>
                </div>
            </div>
            </div>
        )
        :
        (
            <div>
                <div>
                    <TodoForm oldTodo={todo} id={id}/>
                </div>
            </div>
        )}



    </>
  );
}

export default TodoItem;
