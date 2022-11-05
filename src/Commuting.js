import React from "react";
import { MakeNavBar, MakeCard } from "./Functions.js";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// Commuting Resources go into this page

export function CommutingResources() {
  return (
    <div>
      <MakeNavBar />
      <MakeCard
        imgLink="https://transportation.uw.edu/files/media/nightride-shuttle-inset-image.jpg"
        title="Night Ride"
        description="NightRide provides a fare-free, safe and easy way for Husky Card holders to get home at night. NightRide shuttles pick up passengers at eight convenient campus locations and drop off passengers anywhere within one of two zones after the campus location stops."
      />
      <MakeCard
        imgLink="https://i.pinimg.com/originals/00/25/db/0025db4dd4399fb14ed0b5f76bc59e9c.jpg
        "
        title="Husky NightWalk"
        description="Husky NightWalk is safe and easy to use. Uniformed security guards operate 6:30 pm to 2am daily EXCEPT University Holidays, providing a walking escort to community members within the campus locations and the residential area north of 45th St., and to the UW Tower location.  Guards can also assist, with proper identification, building and office lockouts, as well as jump start dead car batteries. Just dial 206.685.WALK (206.685.9255) when you are ready for a safety escort"
      />
    </div>
  );
}
