import React from "react";
import { MakeNavBar, MakeCard } from "./Functions.js";
import safecampusImg from "./img/safecampus.jpg";
import uwalertImg from "./img/uwalert.png"
// Other resources go into this page

export function OtherResources() {
  return (
    <div>
      <MakeNavBar />
      <h1>Other Resources</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iD1qJkXlmLI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <MakeCard
        imgLink={safecampusImg}
        title="UW SafeCampus"
        description="SafeCampus is UW’s violence-prevention and response program, and can help you navigate many situations, whether they impact you or someone you know — including threats, stalking, sexual assault, relationship violence, harassment, suicide concerns, workplace violence and more. Call them at 206-685-7233 Monday – Friday, 8 am – 5 pm."
      />
      <MakeCard
        imgLink= {uwalertImg}
        title="UW Alerts"
        description="To stay informed about emergencies on campus, sign up for UW Alert, which is a tool that disseminates alert notices to students, faculty and staff if there are ever emergencies or activities that may disrupt normal campus operations."
      />
    </div>
  );
}
