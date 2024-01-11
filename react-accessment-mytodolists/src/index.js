import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import LogInContextProvider from './context/LogInContext';
// import MyTodoContextProvider from './context/MyTodoContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <LogInContextProvider>
    //   <MyTodoContextProvider>
        <App />
      /* </MyTodoContextProvider>
    </LogInContextProvider> */
  // </React.StrictMode>
);
