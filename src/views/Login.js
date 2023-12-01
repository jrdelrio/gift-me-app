import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css"; // Import the CSS file for styling

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();

    navigate("/"); // Redirect after login
  }

  return (
    <>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" 
                placeholder="Email" 
                className="input" 
                onChange={(e) => setEmail(e.target.value)}/>
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
              <div className="form-link">
                <Link className="forgot-pass">Forgot password?</Link>
              </div>
              <div className="field button-field">
                <button onClick={handleLoginClick}>Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <a href="#" className="link signup-link">
                  Signup
                </a>
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
        {/* Signup Form */}
        <div className="form signup">
          <div className="form-content">
            <header>Signup</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Create password"
                  className="password"
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              <div className="field button-field">
                <button>Signup</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Already have an account?{" "}
                <a href="#" className="link login-link">
                  Login
                </a>
              </span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="media-options">
            <a href="#" className="field google">
              <img src="#" alt="" className="google-img" />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
      <script src="js/script.js"></script>
    </>
  );
};

const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});

{
  /* // <div className="login-container">
        //     <form onSubmit={handleSubmit} className="login-form">
        //         <h1 className="login-title">Welcome Back!</h1>
        //         <div className="input-group">
        //             <label htmlFor="username">Username</label>
        //             <input 
        //                 id="username" 
        //                 type="text"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)}
        //                 placeholder="Enter your username" 
        //             />
        //         </div>
        //         <div className="input-group">
        //             <label htmlFor="password">Password</label>
        //             <input 
        //                 id="password" 
        //                 type="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 placeholder="Enter your password" 
        //             />
        //         </div>
        //         <button type="submit" className="login-button">Login</button>
        //         <Link to="/register">Register here</Link>
        //     </form>
        // </div> */
}
