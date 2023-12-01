import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css"; // Import the CSS file for styling

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();

    navigate("/"); // Redirect after login
  };

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Register</header>
          <form action="#">
            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm Password"
                className="input"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {password !== confirmPassword && confirmPassword !== '' ? <p className='d-flex text-danger justify-content-end ' style={{"font-size": "12px"}}>Las contraseñas no coinciden*</p> : ""}
            </div>

            <div className="field button-field">
              <button onClick={handleLoginClick}>Login</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              You have an account?{" "}
              <Link className="link signup-link" to="/login">
                Login
              </Link>
            </span>
          </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="facebook-icon fa-brands fa-facebook"></i>
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <i className="fa-brands fa-google facebook-icon"></i>
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};
