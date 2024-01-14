import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate();
  const logInNav = () => {
    navigate('/todo')
  }

  const token = localStorage.getItem('token')
  //set state
  const [emailOrMobile, setEmailOrMobile] = useState('')
  const [password, setPassword] = useState('')

  //handle function
  const handleEmailChange = (event) => {
    console.log('type email', event.target.value);
    setEmailOrMobile(event.target.value)
  }
  const handlePasswordChange = (event) => {
    console.log('type password', event.target.value);
    setPassword(event.target.value)
  }
  const handleSubmit = (event) => {
    console.log('submit');
    event.preventDefault()
    LogIn()
  }

  const LogIn = async() => {
    try {
      const res = await axios.post('https://paybox-wnfo.onrender.com/auth/login', {
        emailOrMobile: emailOrMobile,
        password: password,  
      })
      console.log(res, "res LOGIN");
      console.log(res.data);
      localStorage.setItem("token", res.data.accessToken)
      if (!res.data.message)logInNav()
    } catch (err){
      console.log(err);
      localStorage.removeItem("token")
    }
  }
  
  return (
    <div className='DefaultDiv'>
    <h1>Welcome to Todo</h1>
    <form 
    className='Form' 
    onSubmit={handleSubmit}
    // onSubmit={logIn}
    >
        <label htmlFor='email'>Email</label>
        <input 
        type='email' 
        value={emailOrMobile} 
        id='email' 
        name='email' 
        onChange={handleEmailChange}
        ></input>
        <label htmlFor='password'>Password</label>
        <input 
        type='password' 
        value={password} 
        id='password' 
        name='password' 
        onChange={handlePasswordChange}
        ></input>
        <button type='submit'><h2>LOG IN</h2></button>
        <p>
          Don't have an account? &nbsp;
          <Link to={'/signup'}>
            Sign Up
          </Link>
        </p>
    </form>
</div>
  )
}

export default Login