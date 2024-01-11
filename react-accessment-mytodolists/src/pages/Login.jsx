import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const logIn = () => {
    navigate('/todo')
  }
  return (
    <div className='DefaultDiv'>
    <h1>LOG IN</h1>
    <form 
    className='Form' 
    // onSubmit={handleSubmit}
    onSubmit={logIn}
    >
        <label htmlFor='email'>Email</label>
        <input 
        type='email' 
        // value={email} 
        id='email' 
        name='email' 
        // onChange={handleEmailChange}
        ></input>
        <label htmlFor='password'>password</label>
        <input 
        type='password' 
        // value={password} 
        id='password' 
        name='password' 
        // onChange={handlePasswordChange}
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