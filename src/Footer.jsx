import React from "react"
import TwitterIcon from "./assets/Twitter Icon.svg"
import FacebookIcon from "./assets/Facebook Icon.svg"
import InstagramIcon from "./assets/Instagram Icon.svg"
import GithubIcon from "./assets/GitHub Icon.svg"

export default function Footer(){
    return(
            <div id="footer">
                <div id="footerFrame">
                    <img src={TwitterIcon} alt="" srcset="" />
                    <img src={FacebookIcon} alt="" srcset="" />
                    <img src={InstagramIcon} alt="" srcset="" />
                    <img src={GithubIcon} alt="" srcset="" />
                </div>
            </div>
    )
}