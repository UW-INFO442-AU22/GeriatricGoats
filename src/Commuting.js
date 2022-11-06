import React from "react";
import { MakeNavBar, MakeCard } from "./Functions.js";
import nightrideImg from "./img/nightride.jpg"
import nightwalkImg from "./img/nightwalk.jpg"

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// Commuting Resources go into this page

export function CommutingResources() {
  return (
    <div>
      <MakeNavBar />
      <h1>Commuting Resources</h1>
      <MakeCard
        imgLink={nightrideImg}
        title="Night Ride"
        description="NightRide provides a fare-free, safe and easy way for Husky Card holders to get home at night. NightRide shuttles pick up passengers at eight convenient campus locations and drop off passengers anywhere within one of two zones after the campus location stops."
      />
      <MakeCard
        imgLink={nightwalkImg}
        title="Husky NightWalk"
        description="Husky NightWalk is safe and easy to use. Uniformed security guards operate 6:30 pm to 2am daily EXCEPT University Holidays, providing a walking escort to community members within the campus locations and the residential area north of 45th St., and to the UW Tower location.  Guards can also assist, with proper identification, building and office lockouts, as well as jump start dead car batteries. Just dial 206.685.WALK (206.685.9255) when you are ready for a safety escort"
      />
    </div>
  );
}
