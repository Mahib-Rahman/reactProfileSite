import React from "react";
import "./style.css";
import githubLogo from "../Images/githubLogo.png";
import facebookLogo from "../Images/facebookLogo.png";
import twitterLogo from "../Images/twitterLogo.png";
import instagramLogo from "../Images/instagramLogo.png";

function Footer() {
    return(
        <div id="sociallinks">
            <a href="https://twitter.com/">
                <button><img src={twitterLogo} alt="TB"/></button>
            </a>
            <a href="https://www.facebook.com/">
                <button><img src={facebookLogo} alt="FB" /></button>
            </a>
            <a href="https://www.instagram.com/">
                <button><img src={instagramLogo} alt="IB" /></button>
            </a>
            <a href="https://github.com/Mahib7009">
                <button><img src={githubLogo} alt="GB" /></button>
            </a>
        </div>
    );
}

export default Footer;