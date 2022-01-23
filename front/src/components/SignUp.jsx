import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
const apiUrl = "http://localhost:3030/api/users";
export default function SignUp() {
  const userNameInput = useRef(null);
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const passwordInput = useRef(null);
  const emailInput = useRef(null);
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    const user_name = userNameInput.current.value;
    const first_name = firstNameInput.current.value;
    const last_name = lastNameInput.current.value;
    const password = passwordInput.current.value;
    const email = emailInput.current.value;
    if (!email || !user_name | !first_name || !last_name || !password) {
      document.querySelector(".errorMsg").textContent = "Must enter all fields";
      return;
    }
    try {
      await axios.post(apiUrl, {
        user_name,
        first_name,
        last_name,
        password,
        email,
      });
      alert("created successfully, navigating you to login page");
      navigate("/"); //navigates to signIn page
    } catch (error) {
      document.querySelector(".errorMsg").textContent = error.response.data;
    }
  };
  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>User Name</label>
          <input
            ref={userNameInput}
            type="text"
            className="form-control"
            placeholder="User Name"
          />
        </div>
        <div className="form-group">
          <label>First name</label>
          <input
            ref={firstNameInput}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            ref={lastNameInput}
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            ref={emailInput}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            ref={passwordInput}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-3">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered? <Link to="/">sign in</Link>
        </p>
      </form>
      <p className="errorMsg"></p>
    </div>
  );
}
