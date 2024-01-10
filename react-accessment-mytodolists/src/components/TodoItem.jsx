import React from "react";
import { UseMyTodo } from "../context/MyTodoContext";

function TodoItem() {
  const {task} = UseMyTodo()
  return (
    <div>
      <h3>List</h3>

      <div className="listTodo">
        <div className="listTodo__content">
          <button>check</button>
          <h3>Here's a task item</h3>
        </div>


        <div className="listTodo__button">
          <button>edit</button>
          <button>x</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
