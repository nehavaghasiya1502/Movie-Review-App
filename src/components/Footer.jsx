// import "./Footer.css";
// import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

// function Footer() {
//     return (
//         <footer className="footer">
//             <div className="footer-content">

//                 {/* LEFT */}
//                 <div className="footer-left">
//                     © 2026 ShowFlix | Made by Neha
//                 </div>

//                 {/* CENTER */}
//                 <div className="footer-center">
//                     <a href="https://github.com/nehavaghasiya" target="_blank" rel="noreferrer">
//                         <FaGithub />
//                     </a>

//                     <a href="https://linkedin.com/in/nehavaghasiya" target="_blank" rel="noreferrer">
//                         <FaLinkedin />
//                     </a>
//                     <a href="/code"><FaCode /></a>
//                 </div>

//                 {/* RIGHT */}
//                 <div className="footer-right">
//                     <span className="footer-link">Terms & Conditions</span> |
//                     <span className="footer-link">Privacy Policy</span>
//                 </div>

//             </div>
//         </footer>
//     );
// }

// export default Footer;

import "./Footer.css";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* LEFT */}
        <div className="footer-left">
          © 2026 ShowFlix | Made by Neha
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <a
            href="https://github.com/nehavaghasiya"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/nehavaghasiya"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          {/* remove /code link if no page */}
          <span className="footer-icon">
            <FaCode />
          </span>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <span className="footer-link">Terms & Conditions</span>
          <span className="divider">|</span>
          <span className="footer-link">Privacy Policy</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;