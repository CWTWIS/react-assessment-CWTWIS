import React from "react";
import { UseMyTodo } from "../context/MyTodoContext";
function TodoInPut() {
  const {handleNewTask, handleSubmitTask, task} = UseMyTodo()
  return (
    <div className="TodoInput">
      <div className="Title">
        <h1>My Todo</h1>
        <button type="submit" onClick={handleSubmitTask}>+</button>
      </div>


      <form 
      className="Form" 
      // onSubmit={handleSubmitTask}
      >
        <label htmlFor="newTask">new task</label>
        <input 
        type="text"
        id="newTask"
        name="newTask"
        value={task}
        onChange={handleNewTask}
        ></input>
        <h5 className="error__addNewTask">ERROR: YOU MUST TYPE SOMETHING</h5>
      </form>
    </div>
  );
}

export default TodoInPut;
