import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LOGO + ABOUT */}
        <div className="footer-col">
          <h2 className="footer-logo">ShowFlix</h2>
          <p>
            Watch & review your favourite shows.
            Discover trending series from
            TVMaze API in your own style ❤️
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/trending">Trending</Link></li>
            <li><Link to="/top-rated">Top Rated</Link></li>
            <li><Link to="/watchlist">My Watchlist</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: nehavaghasiya573@gmail.com</p>
          {/* <p>Phone: 9316481647</p> */}
          <p>Ahmedabad, Gujarat</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/neha_vaghasiya_1502"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/neha-vaghasiya-106b743a1/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://github.com/nehavaghasiya1502" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ShowFlix | Made with ❤️ by Neha Vaghasiya
      </div>

    </footer>
  );
}

export default Footer;