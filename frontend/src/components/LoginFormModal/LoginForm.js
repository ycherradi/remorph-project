import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginFormModal.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
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
      <button className="already-a-member" onClick={() => setShowModal(true)}>Not a Member? Sign Up</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignupForm />
          </Modal>
        )}
    </form>
  );
}

export default LoginForm;