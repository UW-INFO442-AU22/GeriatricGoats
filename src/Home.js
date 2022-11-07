import { MakeNavBar } from './Functions.js';

// This is the home page

export function Home() {
    return (
        <div>
            <MakeNavBar />
            <main className='home-main'>
                <article>
                    <h1>Stay Informed, Play It Safe, Make It Home</h1>
                    <p className='home-text'>
                        Make It Home is a web-based solution helping University of Washington students stay informed about non-life threatening incidents near and around campus during nighttime. As UW students ourselves, we want to provide a platform for students to access real-time reports and resources to make safe commuting decisions.
                    </p>
                </article>
                <article>
                    <h1>Our Mission</h1>
                    <p className='home-text'>
                    The goal of Make It Home is to address feelings of anxiety that have risen amongst University of Washington: Seattle campus students with a recent uptake in violent crime occurring around the UW neighborhood, particularly after dark. Through our application, we hope to empower students to make safer commuting choices while traversing through the UW neighborhood by allowing them to share and access timely safety-related information.
                    </p>
                </article>
            </main>
        </div>
    )
}