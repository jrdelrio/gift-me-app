import React from "react";

import '../styles/header-navbar.css';
import portrait from "../images/portrait.jpg"

export const TopNavbar = () => {

    //fetch to db to profile username
    const username = 'José del Rio';

    //fetch to db to profile picture
    const profilePicture = null;

    return (
        <nav className="p-4 flex items-center justify-between header-navbar">
            <div>
                <h1 className="text-xl font-semibold"> 🎁 Gift <span>me</span> !</h1>
            </div>
            <div className="flex items-center space-x-4">
                <span>Welcome, {username}</span>
                {/* {!profilePicture ? <i className="fas fa-user-circle text-2xl"></i> : <img src={profilePicture} />} */}
                <div className="profile-photo-container">
                <img src={portrait} alt="Profile Photo"/>
                </div>
            </div>
        </nav>
    )
}