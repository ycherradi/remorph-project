import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupFormModal.css';

function SignupForm() {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({firstname, lastname, email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <div className="signup-message">Welcome!</div>
      <ul className="signup-error_ul">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div>
        <div className="signup-form_inputDiv">
          <label>
            First Name
            <input
              className="signup-form_input"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="signup-form_inputDiv">
          <label>
            Last Name
            <input
              className="signup-form_input"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="signup-form_inputDiv">
          <label>
            Email
            <input
              className="signup-form_input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="signup-form_inputDiv">
          <label>
            Username
            <input
              className="signup-form_input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="signup-form_inputDiv">
          <label>
            Password
            <input
              className="signup-form_input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="signup-form_inputDiv">
          <label>
            Confirm Password
            <input
              className="signup-form_input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        </div>
      </div>
      <button className="signup-btn" type="submit">Sign Up</button>
      <Link className="already-a-member" to="">Already a Member? Log In</Link>
    </form>
  );
}

export default SignupForm;