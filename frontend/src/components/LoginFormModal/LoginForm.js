import React, { useState } from "react";
import {Link} from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginFormModal.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login-message">Welcome back!</div>
      <ul className="login-error_ul">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div >
        <div className="login-form_inputDiv">
          <label>
            Username or Email
            <input
              className="login-form_input"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="login-form_inputDiv">
          <label>
            Password
            <input
              className="login-form_input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
      </div>
      <button className="login-btn" type="submit">Log In</button>
      <Link className="not-a-member" to="">Not a Member? Sign Up</Link>
    </form>
  );
}

export default LoginForm;