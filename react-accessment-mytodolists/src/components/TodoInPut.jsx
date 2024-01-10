import React from "react";
import { useMyTodo } from "../context/MyTodoContext";
function TodoInPut() {
  const {handleNewTask, handleSubmitTask, task, isError} = useMyTodo()
  return (
    <div className="TodoInput">
      <div className="Title">
        <h1>My Todo</h1>
        <button type="submit" onClick={handleSubmitTask}>+</button>
      </div>


      <form 
      className="Form" 
      onSubmit={handleSubmitTask}
      >
        <label htmlFor="newTask">new task</label>
        <input 
        type="text"
        id="newTask"
        name="newTask"
        value={task}
        onChange={handleNewTask}
        ></input>
        {isError && <h5 className="error__addNewTask">ERROR: YOU MUST TYPE SOMETHING</h5>}
        
      </form>
    </div>
  );
}

export default TodoInPut;
