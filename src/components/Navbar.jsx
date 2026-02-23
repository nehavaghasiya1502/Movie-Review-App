// import React, { useState } from "react";
// import "./Navbar.css";
// import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import LoginPage from "./LoginPage";

// function Navbar() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <nav className="navbar">

//       {/* Logo */}
//       <div className="nav-logo" onClick={() => navigate("/")}>
//         ShowFlix
//       </div>

//       {/* Links */}
//       <ul className={`nav-links ${open ? "active" : ""}`}>
//         <li onClick={() => { navigate("/"); setOpen(false) }}>Home</li>
//         <li>Movies</li>
//         <li>Web Series</li>
//         <li>Top Rated</li>
//       </ul>

//       {/* Right Side */}
//       <div className="nav-right">

//         <FaSearch
//           className="search-icon"
//           onClick={() => navigate("/search")}
//         />

//         {/* <button className="login-btn" onClick={() => navigate("/login")}>
//           Login
//         </button> */}
//         <button className="login-btn" onClick={() => setShowLogin(true)}>
//   Login
// </button>

//         <div className="menu-icon" onClick={() => setOpen(!open)}>
//           {open ? <FaTimes /> : <FaBars />}
//         </div>

//       </div>
//       {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
//     </nav>
//   );
// }

// export default Navbar;
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
        <li>Movies</li>
        <li>Web Series</li>
        <li>Top Rated</li>
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