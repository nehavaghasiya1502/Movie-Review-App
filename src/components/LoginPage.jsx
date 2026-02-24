import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {

  const [isRegister, setIsRegister] = useState(false);
  const [isForgot, setIsForgot] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");

  const navigate = useNavigate();

  // LOGIN / REGISTER
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (isRegister) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Register Successful 🎉");
      setIsRegister(false);
      setEmail("");
      setPassword("");
    } else {
      const savedEmail = localStorage.getItem("userEmail");
      const savedPass = localStorage.getItem("userPassword");

      if (email === savedEmail && password === savedPass) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful 🎉");
        navigate("/");
      } else {
        alert("Wrong email or password ❌");
      }
    }
  };

  // FORGOT PASSWORD
  const handleForgot = (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem("userEmail");

    if (email !== savedEmail) {
      alert("Email not found 😢");
      return;
    }

    localStorage.setItem("userPassword", newPass);
    alert("Password Updated 🎉 Please login again");
    setIsForgot(false);
    setEmail("");
    setNewPass("");
  };

  return (
    <div className="login-overlay">
      <div className="login-box">

        <h2>🎬 ShowFlix {isForgot ? "Reset Password" : isRegister ? "Register" : "Login"}</h2>
        <p className="subtitle">Review • Rate • Enjoy Movies</p>

        {/* LOGIN / REGISTER */}
        {!isForgot ? (

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="📧 Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="🔒 Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
              {isRegister ? "Register" : "Login"}
            </button>
          </form>

        ) : (

          /* FORGOT PASSWORD */
          <form onSubmit={handleForgot}>
            <input
              type="email"
              placeholder="Enter Registered Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />

            <button type="submit">Update Password</button>
          </form>
        )}

        {/* TOGGLE */}
        {!isForgot && (
          <p
            className="toggle-btn"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister
              ? "Already have account? Login"
              : "Don't have account? Register"}
          </p>
        )}

        {/* FORGOT */}
        {!isForgot && (
          <p
            className="forgot-btn"
            onClick={() => setIsForgot(true)}
          >
            Forgot Password?
          </p>
        )}

        {isForgot && (
          <p
            className="toggle-btn"
            onClick={() => setIsForgot(false)}
          >
            Back to Login
          </p>
        )}

        {/* GUEST */}
        <button
          className="guest-btn"
          onClick={() => navigate("/")}
        >
          Continue as Guest 🎬
        </button>

      </div>
    </div>
  );
}

export default LoginPage;