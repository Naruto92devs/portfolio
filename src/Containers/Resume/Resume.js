import React from "react";
import '../../index.css';
import DownloadPDF from "./DownloadPDF";
import './Resume.css';
import resume from '../../Components/Images/resume.png'


const Resume = () => {

    return (
        <div>
            <div className="resume">
                <div className="left">
                    <img className="img1" src={resume} alt="logo"/>
                    {/* <img id="rings1" className="img2" src={rings} alt="logo"/> */}
                </div>
                <div className="right">
                    <h2>
                        <span className="span1">To Download My <br/> </span>
                        <span className="span1"> Resume</span>
                    </h2>
                    <DownloadPDF />
                </div>
            </div>
        </div>
    );
}

export default Resume;