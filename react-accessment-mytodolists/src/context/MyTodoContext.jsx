import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MyTodoContext = createContext();
function MyTodoContextProvider({ children }) {
  //set state
  const [task, setTask] = useState("");


  //=================HARD CODE=======================
  // const DEFAULT = [
  //   { 
  //     task: 'SLEEP',
  //     status: false
  //   }, 
  //   {
  //     task: 'EAT',
  //     status: false
  //   }, 
  //   {
  //     task: 'PLAY',
  //     status: false
  //   }
  // ]
  // const DEFAULT = ['SLEEP', 'EAT', 'PLAY']
  // const [allTodo, setAllTodo] = useState(DEFAULT)
  const [allTodo, setAllTodo] = useState([])

  const [isError, setIsError] = useState(false)

  const [isEdit, setIsEdit] = useState(false)

  const [text, setText] = useState('')

  // const []

  //handle function
  const handleNewTask = (event) => {
    // console.log("type new task", task);
    setTask(event.target.value);
    setIsError(false)
  };

  const handleSubmitTask = (event) => {
    event.preventDefault();
    console.log("submit", task);
    if (task.trim() === ""){
      setIsError(true)
    } else {
      addTodo({task: task, status: false})
      setTask('')
    }
  };
  
  // const handleSubmitTask = (event) => {
  //   event.preventDefault();
  //   console.log("submit", task);
  //   if (task.trim() === ""){
  //     setIsError(true)
  //   } else 
  //       {
  //       if(oldTodo) {
  //           const newTodo = {...oldTodo, task: text}
  //           editTodoById(newTodo.id, newTodo) //send params back -> see context
  //       }else{
  //           addTodo({task: text, status: false})
  //       }
  //   }
  //       setIsError(false)
  //       onClose()
  // };

  const handleEdit = () => {
    setIsEdit(true)
  }
  const onClose = () => {
    setIsEdit(false)
  }

 
  // axios fetch
  const getAllTodo = async() => {
    try{
      //set firstname = Chawanrat
      //set lastname = Wisitphongphiboon
      const res = await axios.get('https://express-todo-klut.onrender.com/todo/?firstname=Chawanrat&lastname=Wisitphongphiboon')
      console.log(res);
      console.log(res.data);

      setAllTodo(res.data)
    } catch (err){
      console.log(err);
    }
  }

  useEffect(()=> {
    getAllTodo()
  }, [])
  
 // handle add axios add
    const addTodo = async(newTodo) => {
      try {
        console.log(newTodo,"add new")
        const res = await axios.post('https://express-todo-klut.onrender.com/todo/', newTodo)
        console.log(res, "res");
        console.log(res.data);
        setAllTodo((curr) => [res.data, ...curr])
      } catch (err){
        console.log(err);
      }
    }

  
  // handle edit axios put
    // const editTodoById = (id, newTodo) => {
    //   const newTodoList = [...allTodo]
    //   const foundedId = newTodoList.findIndex((todo)=>todo.id === id)
    //   if (foundedId !== -1){
    //     // replace by delete at index and add a new one
    //     newTodoList.splice(foundedId, 1, newTodo)
    //     setAllTodo(newTodoList)
    //   }
    // }

    const editTodoById = async (id, newTodo) => {
      try{
        const res = await axios.patch('https://express-todo-klut.onrender.com/todo/update/:id', newTodo)
        const newTodoList = [...allTodo]
        const foundedId = newTodoList.findIndex((todo)=>todo.id === id)
        if (foundedId !== -1){
          // replace by delete at index and add a new one
          newTodoList.splice(foundedId, 1, newTodo)
          setAllTodo(newTodoList)
        }
      }catch(err){
        console.log(err);
      }
    }
 
  // handle delete axios 



  //pack
  const sharedObj = {
    allTodo, setAllTodo,
    task, handleNewTask, 
    text, setText,
    handleSubmitTask, 
    isError, setIsError, 
    isEdit,handleEdit,
    onClose,
    addTodo, editTodoById,
  };
  return (
    <MyTodoContext.Provider value={sharedObj}>
      {children}
    </MyTodoContext.Provider>
  );
}

export const useMyTodo = () => {
  return useContext(MyTodoContext);
};

export default MyTodoContextProvider;
