import React from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { Link, useNavigate } from "react-router-dom";

function Todopage() {
  const navigate = useNavigate();
  const LogOut = () => {
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
