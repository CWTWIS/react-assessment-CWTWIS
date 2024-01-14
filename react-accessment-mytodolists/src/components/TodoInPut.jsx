import React from "react";
import { useTodo } from "../context/TodoContext";

function TodoInput() {
  const { userData, handleNewTask, handleSubmitTask, isError, task} = useTodo()
  let Data = userData
  // if(userData) Data = userData
  return (
    <div className="TodoInput">
      <div className="TodoInput__title">
        <h2>Welcome,&nbsp;</h2>
        <h1 className="TodoInput__title__userName">{Data.firstName}&nbsp;{Data.lastName}</h1>
        {/* <h1>to Todo</h1> */}
      </div>

      <form
        className="Form"
          onSubmit={handleSubmitTask}
      >
        {/* <h2>My todo</h2> */}
        {/* <label htmlFor="newTask">new task</label> */}
        <div className="TodoInput__Form__AddTask">
          <input
            type="text"
            id="newTask"
            name="newTask"
            placeholder="add your todo"
            value={task}
            onChange={handleNewTask}
          ></input>
          <button
            className="addTask_btn"
            type="submit"
            // onClick={handleSubmitTask}
          >
            +
          </button>
        </div>

        {isError && (
        <h5 className="error__addNewTask">ERROR: YOU MUST TYPE SOMETHING</h5>
        )}
      </form>
    </div>
  );
}

export default TodoInput;
