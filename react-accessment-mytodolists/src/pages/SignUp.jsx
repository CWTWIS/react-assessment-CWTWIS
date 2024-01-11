import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="DefaultDiv">
      <h1>SIGN UP</h1>
      <form
        className="Form"
        // onSubmit={handleSubmit}
      >
        {/* fisrtname lastname */}
        <div className="Form__name">
            <div className="Form__name__first">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    // value={email}
                    id="firstName"
                    name="firstName"
                    // onChange={handleEmailChange}
                ></input>
            </div>

            <div className="Form__name__last">
            <label htmlFor="lastName">Last name</label>
            <input
                type="lastName"
                // value={email}
                id="lastName"
                name="lastName"
                // onChange={handleEmailChange}
            ></input>
            </div>
        </div>

        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          // value={email}
          id="email"
          name="email"
          // onChange={handleEmailChange}
        ></input>

        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          // value={password}
          id="password"
          name="password"
          // onChange={handlePasswordChange}
        ></input>

        {/* confirm password */}
        <label htmlFor="CFpassword">Confirm password</label>
        <input
          type="CFpassword"
          // value={password}
          id="CFpassword"
          name="CFpassword"
          // onChange={handlePasswordChange}
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
