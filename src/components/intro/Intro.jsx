import React from 'react';
import "./intro.scss";
import illustration from "../../assets/pic1.png";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={illustration} alt="girl"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There! I'm</h2>
                    <h1>CHRISTINE</h1>
                    <h3>I'm a <span>Web Developer</span> from San Diego, CA.</h3>
                </div>
            </div>
        </div>
    )
}
