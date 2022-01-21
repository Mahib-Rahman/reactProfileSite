import React from 'react';
import "./style.css";
import TopButtons from "./TopButtons";
import Footer from "./Footer";
import Content from "./Content";
import myPic from "../Images/myPic.jpg";

function Body() {
    return (
        <div className="card">
            <img id="mypic" src={myPic} alt="A Pic of ME" />
            <h2 id="name">Mahib Rahman</h2>
            <h5 id="position">Software Developer</h5>
            <h6 id="site">https://github.com/Mahib7009</h6>
            <TopButtons />
            <Content />
            <Footer />
        </div>
    );
}
export default Body;