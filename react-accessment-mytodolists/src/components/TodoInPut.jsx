import React from "react";

function TodoInput() {
  return (
    <div className="TodoInput">
      <div className="TodoInput__title">
        <h1>Welcome,&nbsp;firstname&nbsp;lastname</h1>
      </div>

      <form
        className="Form"
        //   onSubmit={handleSubmitTask}
      >
        <h2>My todo</h2>
        {/* <label htmlFor="newTask">new task</label> */}
        <div className="TodoInput__Form__AddTask">
          <input
            type="text"
            id="newTask"
            name="newTask"
            placeholder="add your todo"
            //   value={task}
            //   onChange={handleNewTask}
          ></input>
          <button
            className="TodoInput__Form__AddTaskBtn"
            type="submit"
            // onClick={handleSubmitTask}
          >
            +
          </button>
        </div>

        {/* {isError && ( */}
        <h5 className="error__addNewTask">ERROR: YOU MUST TYPE SOMETHING</h5>
        {/* )} */}
      </form>
    </div>
  );
}

export default TodoInput;
