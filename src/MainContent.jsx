import React from "react"
import EmailIcon from "./assets/Mail.svg"
import LinkedlnIcon from "./assets/linkedin.svg"

export default function MainContent(){
    return(
        <div id="main-content">
            <div id="title">
                <h1>Kauan Carvalho</h1>
                <h3>Frontend Developer and Motion designer</h3>
                <h4>kauan.psd</h4>
            </div>
            
            <div id="buttons">
                <button id="email"> <img id = "email-icon" src={EmailIcon} alt="" /> <span>Email</span></button>
                <button id="linkedln"> <img id = "linkedln-icon"src={LinkedlnIcon} alt="" /> <span>Linkedln</span></button>
            </div>

            <div id="info">
                <div id="about">
                    <h1>About</h1>
                        <p>
                            I am a frontend developer with a particular interest in making things simple
                            and automating daily tasks. I try to keep up with security and best practices,
                            and am always looking for new things to learn.
                        </p>
                </div>

                <div id="interests">
                    <h1>Interests</h1>
                        <p>
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
                        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                        </p>
                </div>
            </div>
        </div>
    )
}