import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const LogInContext = createContext();

function LogInContextProvider({ children }) {
  const [LoginSuccess, setLoginSuccess] = useState(false);
  const [user, setUser] = useState(null);

  //async await fetch api
  // normal async
  const getMe = async() => {
  // async function getMe() {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiZTRhZTcyZC03N2UxLTQyMjctYTNmNC03NDBiZDdmZGVlNzkiLCJpYXQiOjE3MDQ4NjE2NDIsImV4cCI6MTcwNDk0ODA0Mn0.9l60BF1yhOR6393tB9Xahy0lIx-ugzTDmSj4IZey8FM'; // get token from somewhere
    // const token = "MY_TOKEN";
    const res = await fetch("https://paybox-wnfo.onrender.com/auth/me"
    , {
      method: "GET",
      headers: {
          Authorization: `Bearer ${token}`, // put your token here
        //   'Content-type' : 'application/json'
      },
    }
    );
    const data = await res.json();
    setUser(data.user)
    console.log(data);
    setUser(data.user)

  }

  //axios
  // const getMe = async() => {
  //   try{
  //     const res = await axios.get('https://paybox-wnfo.onrender.com/auth/me')
  //     console.log(res);
  //   }catch (err){
  //     console.log(err);
  //   }
  // }



  useEffect( () => {
      getMe()
  }, [])



  function LogIn (email, password){
    fetch('https://paybox-wnfo.onrender.com/auth/login',{
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({emailOrMobile:email, password: password})
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setUser(data.user)
      // console.log(data.user);
      // console.log(data.user.firstName);
      localStorage.setItem("token", data.accessToken)
    })
    .catch((err)=>{
      console.log(err);
      setUser(null);
      localStorage.removeItem("token")
    })

  }
  

  const LogOut = () => {
    setUser(null)
    localStorage.removeItem("token")
    // setLoginSuccess(false);
  };

  //pack
  const sharedObj = { user, setUser, LogOut, LogIn, setLoginSuccess, LoginSuccess};

  return (
    <LogInContext.Provider value={sharedObj}>{children}</LogInContext.Provider>
  );

};
export const useLogIn = () => {
  return useContext(LogInContext);
};

export default LogInContextProvider;
