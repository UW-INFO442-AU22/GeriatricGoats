import "./css/Footer.css";
import logo from "./img/logo.svg";

// Footer at the bottom of every page

function Footer() {
   return (
      <footer className="footer">
         <p>
            <img src={logo} height="30em" width="50em" alt="Make It home logo" />
            &copy; 2022 UW INFO 442 Team 7: GeriatricGoats • All rights reserved
         </p>
      </footer>
   )
}

export default Footer;