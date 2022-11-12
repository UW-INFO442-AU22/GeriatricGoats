import "./css/Footer.css";
import logo from "./img/logo.svg";

// Footer at the bottom of every page

function Footer() {
   return (
      <footer className="footer">
         <div className="footer-items">
            <img src={logo} alt="Make It home logo" />
            <span>&copy; 2022 UW INFO 442 Team 7: GeriatricGoats • All rights reserved</span>
         </div>
      </footer>
   )
}

export default Footer;