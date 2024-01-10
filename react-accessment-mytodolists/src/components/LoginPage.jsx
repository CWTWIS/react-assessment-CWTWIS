import React, { useContext, useState } from 'react'
import { useLogIn } from '../context/LogInContext'

function LoginPage() {
    //get from context
    const {setLoginSuccess, LogIn} = useLogIn()

    //set state
    // const [LoginSuccess, setLoginSuccess] = useState(false)

    // email
    const [email, setEmail] = useState('')
    // password
    const [password, setPassword] = useState('')

    //handle function
    const handleEmailChange = (event) => {
        console.log('type email', event.target.value);
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        console.log('type password', event.target.value);
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        console.log('submit');
        event.preventDefault()
        LogIn(email, password)
        // if (email==='babababa@gmail.com' && password==='123456'){
        //     setLoginSuccess(true)
        // }else{
        //     alert("LOGIN UNSUCCESSFUL")
        //     setLoginSuccess(false)
        // }
    }


  return (
    <div className='DefaultDiv'>
        <h1>Welcome</h1>
        <form className='Form' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input 
            type='text' 
            value={email} 
            id='email' 
            name='email' 
            onChange={handleEmailChange}></input>
            <label htmlFor='password'>password</label>
            <input 
            type='password' 
            value={password} 
            id='password' 
            name='password' 
            onChange={handlePasswordChange}></input>
            <button type='submit'><h2>LOG IN</h2></button>
        </form>
    </div>
  )
}

export default LoginPage