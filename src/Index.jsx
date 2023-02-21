import React from "react";
import ReactDOM from "react-dom";
import ProfilePicture from "./ProfilePicture";
import MainContent from "./MainContent"
import Footer from "./Footer"

function App(){
    return(
        <>
            <ProfilePicture/>
            <MainContent/>
            <Footer/>
        </>
    )
}



ReactDOM.render(<App/> ,document.getElementById("root"))