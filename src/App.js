import "./App.css";
import React, { useState } from "react";

const isStrongPassword = (password) => {
  if (password.length < 8) {
    return false;
  }
  if (
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/\d/.test(password) ||
    !/[!#$%&*^]/.test(password)
  ) {
    return false;
  }
  return true;
};

function App() {
  const [password, setPassword] = useState("");
  const [isStrong, setIsStrong] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsStrong(isStrongPassword(newPassword));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="wrap">
        <div className="pass">
          <h1>Password Checker</h1>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Your password"
          />
          <button className="animated-button" onClick={handleShowPassword}>
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
          {password && (
            <p style={{ color: isStrong ? "green" : "red" }}>
              {isStrong ? "Strong Password" : "Weak Password"}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;