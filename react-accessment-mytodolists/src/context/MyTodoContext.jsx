import React, { createContext, useContext, useState } from "react";
const MyTodoContext = createContext();
function MyTodoContextProvider({ children }) {
  //set state
  const [task, setTask] = useState("");

  const [isError, setIsError] = useState(false)

  //handle function
  const handleNewTask = (event) => {
    console.log("type new task", task);
    setTask(event.target.value);
  };

  const handleSubmitTask = (event) => {
    event.preventDefault();
    console.log("submit", task);
    // task must not be ''

  };

  //pack
  const sharedObj = {task, handleNewTask, handleSubmitTask};
  return (
    <MyTodoContext.Provider value={sharedObj}>
      {children}
    </MyTodoContext.Provider>
  );
}

export const UseMyTodo = () => {
  return useContext(MyTodoContext);
};

export default MyTodoContextProvider;
