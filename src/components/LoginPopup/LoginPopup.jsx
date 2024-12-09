import React, { useState } from 'react';
import "./LoginPopup.css";
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const api = "https://67515592d1983b9597b25164.mockapi.io/users";
    const [currState, setCurrState] = useState("Login");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const resetFields = () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (currState === "Sign Up") {
                // Check if email already exists
                const checkResponse = await fetch(`${api}?email=${email}`);
                const existingUsers = await checkResponse.json();

                if (existingUsers.length > 0) {
                    setError("Email already exists. Please log in.");
                } else {
                    // Create new user
                    const response = await fetch(api, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username, email, password }),
                    });

                    if (response.ok) {
                        alert("Account created successfully.");
                        setCurrState("Login");
                        resetFields();
                    } else {
                        setError("Failed to create account. Please try again.");
                    }
                }
            } else {
                // Log in user
                const response = await fetch(`${api}?email=${email}`);
                const users = await response.json();

                if (users.length === 0) {
                    setError("No user found with this email.");
                } else {
                    const user = users[0];
                    if (user.password === password) {
                        alert("Login successful.");
                        setShowLogin(false); // Close the popup
                    } else {
                        setError("Incorrect password.");
                    }
                }
            }
        } catch (error) {
            console.error("Error:", error);
            setError("An unexpected error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-popup">
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <input
                            type="text"
                            placeholder="Your name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <button type="submit">
                        {currState === "Sign Up" ? "Create account" : "Login"}
                    </button>
                )}
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrState("Sign Up")}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrState("Login")}>Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
