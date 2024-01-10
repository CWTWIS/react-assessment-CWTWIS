import React from "react";
import { useMyTodo } from "../context/MyTodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const {allTodo} = useMyTodo()
  console.log(allTodo);
  return (
    <ul>{allTodo.map((todo) => (
       <TodoItem key={todo.id} todo={todo}/>
    ))}
    </ul>
  );
}

export default TodoList;
