import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="nav-logo" onClick={() => navigate("/")}>
        ShowFlix
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li onClick={() => { navigate("/"); setOpen(false) }}>Home</li>
        <li onClick={() => { navigate("/trending"); setOpen(false) }}>Trending</li>
        <li onClick={() => { navigate("/top-rated"); setOpen(false) }}>Top Rated</li>
        <li onClick={() => { navigate("/genres"); setOpen(false) }}>Genres</li>
        <li onClick={() => { navigate("/watchlist"); setOpen(false) }}>Watchlist</li>
      </ul>

      <div className="nav-right">
        <FaSearch
          className="search-icon"
          onClick={() => navigate("/search")}
        />

        {!localStorage.getItem("isLoggedIn") ? (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <button className="login-btn" onClick={logout}>
            Logout
          </button>
        )}

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

    </nav>
  );
}

export default Navbar;