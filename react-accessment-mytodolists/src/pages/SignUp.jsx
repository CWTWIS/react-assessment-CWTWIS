import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  //set state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailOrMobile, setEmailOrMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  //handle 
  // firstname change
  const handleFirstNameChange = (event) => {
    console.log('type FN', event.target.value);
    setFirstName(event.target.value)
  }
  // lastname change
  const handleLastNameChange = (event) => {
    console.log('type LN', event.target.value);
    setLastName(event.target.value)
  }
  // email change
  const handleEmailChange = (event) => {
    console.log('type email', event.target.value);
    setEmailOrMobile(event.target.value)
  }
  // password change
  const handlePasswordChange = (event) => {
    console.log('type password', event.target.value);
    setPassword(event.target.value)
  }
  // confirmPassword change
  const handleCFPasswordChange = (event) => {
    console.log('type CFpassword', event.target.value);
    setConfirmPassword(event.target.value)
  }
  // submit
  const handleSubmit = (event) => {
    console.log('submit');
    event.preventDefault()
    register()
  }
 

  //axios
  const register = async() => {
    try {
      const res = await axios.post('https://paybox-wnfo.onrender.com/auth/register', {
        emailOrMobile: emailOrMobile,
        password: password,
        confirmPassword: confirmPassword,
        firstName: firstName,
        lastName, lastName   
      })
      console.log(res, "res regis");
      console.log(res.data);
    } catch (err){
      console.log(err);
    }
  }


  return (
    <div className="DefaultDiv">
      <h1>Welcome to Todo</h1>
      <form
        className="Form"
        onSubmit={handleSubmit}
      >
        {/* fisrtname lastname */}
        <div className="Form__name">
            <div className="Form__name__first">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    value={firstName}
                    id="firstName"
                    name="firstName"
                    onChange={handleFirstNameChange}
                ></input>
            </div>

            <div className="Form__name__last">
            <label htmlFor="lastName">Last name</label>
            <input
                type="lastName"
                value={lastName}
                id="lastName"
                name="lastName"
                onChange={handleLastNameChange}
            ></input>
            </div>
        </div>

        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={emailOrMobile}
          id="email"
          name="email"
          onChange={handleEmailChange}
        ></input>

        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          id="password"
          name="password"
          onChange={handlePasswordChange}
        ></input>

        {/* confirm password */}
        <label htmlFor="CFpassword">Confirm password</label>
        <input
          type="password"
          value={confirmPassword}
          id="CFpassword"
          name="CFpassword"
          onChange={handleCFPasswordChange}
        ></input>

        <button type="submit">
          <h2>SIGN UP</h2>
        </button>
        <p>
            Already have an account? &nbsp;
            <Link to={'/login'}>
                Login
            </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
