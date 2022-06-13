import React from 'react';
import "./about.scss";


export default function Portfolio() {
    return (
        <div className="about" id="about">
            

            <div className="wrapper">
                <div className="left">
                    <div className="container">
                    <h1>About Me</h1>
                        <p>I recently found out my love for coding and designing beautiful websites. I love to build websites from scratch and enjoy bringing ideas to life in the browser.<br /><br />
                        I am looking forward to join a team of experienced developers to improve my design and develop custom websites using JavaScript, HTML, and CSS. Here's my <a target="_blank" href="resume.pdf" rel="noopener" >resume</a></p>
                    </div>
                </div>
                <div className="right">
                    
                        <h1>Skills</h1>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>jQuery</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                        
                        <h1>Dev Tools</h1>
                            <li>Visual Studio Code</li>
                            <li>Github</li>

                    

                </div>
            </div>
        </div>
    )
}
