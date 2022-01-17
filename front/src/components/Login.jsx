import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
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
    </div>
  );
}
