import React, { useState } from "react"; // ⬅️ FIX 1: Added { useState }
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Signing in with:", { username, password });
    alert("Sign-in attempt submitted!");
    
    // Optional: Clear fields after submission
    // setUsername("");
    // setPassword("");
  };

  return (
    <div className="app">
      <div className="signin-container">
        <h2>Sign In to Hire the Right Professional</h2>
        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username" // ⬅️ FIX 2: Added name attribute for accessibility/forms
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password" // ⬅️ FIX 3: Added name attribute for accessibility/forms
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <p className="forgot-password">
          <a href="#">Forgot password?</a>
        </p>
        <p className="signup-link">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;