import React from "react";
import "./style.css";
import emailLogo from "../Images/emailLogo.png";
import linkedInLogo from "../Images/linkedInLogo.png";

function TopButtons() {
    return (
        <div id="emailandlinkedinbutton">
            <a href="mailto:mahib7009@gmail.com">
                <button id="emailButton"><img id="emailpic" src={emailLogo} alt="EB" />Email</button>
            </a>
            <a href="https://www.linkedin.com/in/mahib-rahman-416085169/">
                <button id="linkedInButton"><img id="linkedInpic" src={linkedInLogo} alt="LB" />LinkedIn</button>
            </a>
        </div>
    )
}

export default TopButtons;