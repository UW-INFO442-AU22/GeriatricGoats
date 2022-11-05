import React from 'react';
import { MakeNavBar, MakeCard } from './Functions.js';

// Other resources go into this page

export function OtherResources() {
    return (
        <div>
            <MakeNavBar />
            <h1>Other Resources</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iD1qJkXlmLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <MakeCard imgLink="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/57/2020/08/10204546/visit-campus-highlightsDJI_0005-e1597119390956.jpg"
                title="UW SafeCampus"
                description="SafeCampus is UW’s violence-prevention and response program, and can help you navigate many situations, whether they impact you or someone you know — including threats, stalking, sexual assault, relationship violence, harassment, suicide concerns, workplace violence and more. Call them at 206-685-7233 Monday – Friday, 8 am – 5 pm."
            />
            <MakeCard imgLink="https://cerid.uw.edu/sites/cerid.uw.edu/files/styles/full_column__750_wide_/public/uploads/UWalert_logo.png?itok=cZl0yvmd"
                title="UW Alerts"
                description="To stay informed about emergencies on campus, sign up for UW Alert, which is a tool that disseminates alert notices to students, faculty and staff if there are ever emergencies or activities that may disrupt normal campus operations."
            />

        </div>
    )
}