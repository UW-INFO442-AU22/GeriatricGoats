import { MakeNavBar } from './Functions.js';
import './Home.css';

// Home page
export function Home() {
    return (
        <div>
            <MakeNavBar />
            <main className='container'>
                <section className='section container'>
                    <h1>Stay Informed, Play It Safe, Make It Home.</h1>
                    <p>
                        Make It Home is a web-based solution helping University of Washington students stay informed about non-life threatening incidents near and around campus during nighttime. Through this platform, students can access real-time reports and resources to make safe commuting decisions.
                    </p>
                </section>
                <div>
                    <figure>
                        <img src="./img/suzzallo-monochrome.jpeg" alt="Suzzallo library at night"></img>
                    </figure>
                </div>
                {/* <div>
                <section className='hero container'>
                    <h1>Our Mission</h1>
                    <p className='home-text'>
                        The goal of Make It Home is to address feelings of anxiety that have risen amongst University of Washington: Seattle campus students with a recent uptake in violent crime occurring around the UW neighborhood, particularly after dark. Through our application, we hope to empower students to make safer commuting choices while traversing through the UW neighborhood by allowing them to share and access timely safety-related information.
                    </p>
                </section>
                </div> */}
            </main>
        </div>
    )
}