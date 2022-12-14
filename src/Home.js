import "./css/Home.css";
import { Link } from "react-router-dom";

// Home page

export function Home() {
   return (
      <div>
         <div className="hero-image" aria-label="Suzzallo Library at night">
            <div className="overlay">
               <h1 className="homepage-heading">Stay Informed, Play It Safe, Make It Home.</h1>
               <p>
                  Track incidents near and around campus after dark through real-time reports and find resources to make safe commuting decisions.
               </p>
               <Link className="btn btn-primary btn-lg outline home-btn" to="../alerts" role="button">Get started</Link>
            </div>
         </div>
      </div>
   );
}