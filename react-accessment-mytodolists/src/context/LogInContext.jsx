import React, { createContext, useContext, useEffect, useState } from "react";

const LogInContext = createContext();

function LogInContextProvider({ children }) {
  const [LoginSuccess, setLoginSuccess] = useState(false);
  const [user, setUser] = useState(null);
  // You can use this function for getMe
  async function getMe() {
    // let token; // get token from somewhere
    const token = "MY_TOKEN";
    const res = await fetch("https://paybox-wnfo.onrender.com/auth/me", {
      method: "GET",
      headers: {
          Authorization: `Bearer ${token}`, // put your token here
        //   'Content-type' : 'application/json'
      },
    });
    const data = await res.json();
    console.log(data);
    setUser(data.user)
  }

  useEffect( () => {
      getMe()
  }, [])

  const LogIn = () => {
  };

  const LogOut = () => {
    setLoginSuccess(false);
  };

  //pack
  const sharedObj = { user, setUser, LogOut, LogIn, setLoginSuccess, LoginSuccess };

  return (
    <LogInContext.Provider value={sharedObj}>{children}</LogInContext.Provider>
  );
}

export const useLogIn = () => {
  return useContext(LogInContext);
};

export default LogInContextProvider;
