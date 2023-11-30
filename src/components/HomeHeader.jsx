import React, { useEffect, useState } from "react";
import "../styles/home-header.css";

export const HomeHeader = () => {

    const [apiMessage, setApiMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.text();
                console.log(data)
                setApiMessage(data); // Assuming your response has a 'message' field
            } catch (error) {
                console.error("Fetching error:", error);
                // Handle the error appropriately in your application
            }
        };

        fetchData();
        // Now you can use 'url' to make API calls or other operations
    }, []);

    return (
        <header>
            <p>This is a header with all the list information</p>
            <p>API Message: {apiMessage}</p>
        </header>
    )
}