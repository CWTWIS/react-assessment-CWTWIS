import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const token = localStorage.getItem("token");
  var refresh = window.localStorage.getItem("refresh");
  // const list = JSON.parse(localStorage.getItem("list"))
  // console.log(token);

  //set state
  const [userData, setUserData] = useState("");
  const [allTodo, setAllTodo] = useState([]);
  const [task, setTask] = useState("");

  const [isError, setIsError] = useState(false);

  // const [isEdit, setIsEdit] = useState(false)

  // const [text, setText] = useState('')

  //handle function
  const handleNewTask = (event) => {
    // console.log("type new task", task);
    setTask(event.target.value);
    setIsError(false);
  };
  const handleSubmitTask = (event) => {
    event.preventDefault();
    console.log("submit", task);
    if (task.trim() === "") {
      setIsError(true);
    } else {
      console.log(userData);
      addTodo({
        task: task,
        status: false,
        firstname: userData.firstName,
        lastname: userData.lastName,
      });
      setTask("");
    }
  };

  // handle add
  const addTodo = async (newTodo) => {
    try {
      console.log(newTodo, "add new");
      const res = await axios.post(
        "https://express-todo-klut.onrender.com/todo/",
        newTodo
      );
      console.log(res, "res");
      console.log(res.data);
      setAllTodo((curr) => [res.data, ...curr]);
      // getAllTodo()
    } catch (err) {
      console.log(err);
    }
  };
  // handle delete
  const deleteTodoById = async (id) => {
    try {
      await axios.delete(
        `https://express-todo-klut.onrender.com/todo/delete/${id}`
      );
      console.log("delete success");
      setAllTodo((cur) => [...cur].filter((todo) => todo.id !== id));
      // getAllTodo()
    } catch (error) {
      console.log(error);
      console.log("delete fail");
    }
  };
  // handle edit
  const editTodoById = async (id, newTodo) => {
    try {
      const res = await axios.patch(
        `https://express-todo-klut.onrender.com/todo/update/${id}`,
        newTodo
      );
      const newTodoList = [...allTodo];
      const foundedId = newTodoList.findIndex((todo) => todo.id === id);
      if (foundedId !== -1) {
        // replace by delete at index and add a new one
        newTodoList.splice(foundedId, 1, newTodo);
        setAllTodo(newTodoList);
        // getAllTodo()
      }
    } catch (err) {
      console.log(err);
    }
  };

  // fetch: getMe
  const getMe = async () => {
    const res = await fetch("https://paybox-wnfo.onrender.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // put your token here
        //   'Content-type' : 'application/json'
      },
    });
    const data = await res.json();
    console.log("get me: data", data);
    console.log("get me: data => setUserData: userData =", data.user);
    setUserData(data.user);
  };
  useEffect(() => {
    getMe();
  }, [token]);

  //  fetch: alltodo using axios
  const getAllTodo = async () => {
    try {
      //set firstname = userData.firstName
      //set lastname = userData.lastName
      const res = await axios.get(
        `https://express-todo-klut.onrender.com/todo/?firstname=${userData.firstName}&lastname=${userData.lastName}`
      );
      console.log("getAllTodo: res", res);
      console.log("getAllTodo: res.data", res.data);

      setAllTodo(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllTodo();
  }, [userData]);

  //pack
  const sharedObj = {
    getMe,
    getAllTodo,
    userData,
    allTodo,
    handleNewTask,
    handleSubmitTask,
    deleteTodoById,
    editTodoById,
    isError,
    task,
  };

  return (
    <TodoContext.Provider value={sharedObj}>{children}</TodoContext.Provider>
  );
}

export const useTodo = () => {
  return useContext(TodoContext);
};

export default TodoContextProvider;
