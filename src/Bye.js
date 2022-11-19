import "./css/Bye.css";
import husky from "./img/husky.gif";

export function ByeBye() {
   return (
      <div className="bg-image" aria-label="Seattle at night">
         <p>Glad you made it home safe.</p>
         <h1>See you tomorrow night!!</h1>
         <div>
            <img src={husky} class="husky" height="600px" width="600px" alt="GIF of baby Huskies"></img>
         </div>
      </div>
   )
}