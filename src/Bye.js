import "./css/Bye.css";
import husky from "./img/husky.gif";

export function ByeBye() {
    return(
        <div>
            <p>Glad you made it home safe.</p>
            <h1>See you tomorrow night!!</h1>
            <div>
                <img src= {husky} class="husky" height="600px" width="600px"></img>
            </div>
        </div>
    )
}