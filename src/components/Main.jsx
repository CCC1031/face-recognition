import React from "react";
import video from '../assets/rotatingearth.mp4';

const Main = () => {
    return (
        <div className="main">  
            <div className="overlay"></div>
            <video src= {video} autoPlay  controls='' muted loop >
            </video>
            <div></div>
        </div>
    )
}

export default Main; 