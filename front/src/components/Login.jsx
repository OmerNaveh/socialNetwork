import React from "react";
import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";
import { useRef } from "react";
const apiUrl = "http://localhost:3030/api/users";
export default function Login() {
  const { setLogUser } = useContext(userContext);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const logBtn = async (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    if (!email || !password) {
      document.querySelector(".errorMsg").textContent = "Must enter all fields";
      return;
    }
    try {
      axios.defaults.withCredentials = true; // allows request to set cookies
      const res = await axios.put(apiUrl, { email, password });
      setLogUser(res.data);
    } catch (error) {
      document.querySelector(".errorMsg").textContent = error.response.data;
    }
  };
  return (
    <div>
      <form onSubmit={(e) => logBtn(e)}>
        <h3>Sign In</h3>

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
          Submit
        </button>
        <p className="forgot-password text-right">
          Dont have an account? <Link to="/signup">sign up</Link>
        </p>
      </form>
      <p className="errorMsg"></p>
    </div>
  );
}
