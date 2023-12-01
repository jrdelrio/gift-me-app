import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // Import the CSS file for styling

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate('/'); // Redirect after login
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1 className="login-title">Welcome Back!</h1>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username" 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password" 
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    )
}
