import { Link } from "react-router-dom";
import "./css/Home.css";

// Home page

export function Home() {
    return (
        <div>
            <div className="hero-image">
                <div className="overlay">
                    <h1>Stay Informed, Play It Safe, Make It Home.</h1>
                    <p>
                        Track incidents near and around campus after dark through real-time reports and find resources to make safe commuting decisions.
                    </p>
                    <Link className="btn btn-primary btn-lg outline" to="../alerts" role="button">Get Started</Link>
                </div>
            </div>
        </div>
    )
}