import React, { useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";
// import TodoContextProvider from "../context/TodoContext";

function Todopage() {
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("token")
    // localStorage.removeItem("refresh")
    // localStorage.removeItem("list")
    navigate('/login')
  }

  return (
      <div className="DefaultDiv">
        {/* Todo Input */}
        <TodoInput/>

        {/* Todo Item */}
        <TodoList />
        <button 
        onClick={() => LogOut()}
        >
          <h2>LOG OUT</h2>
        </button>
      </div>
  );
}

export default Todopage;
