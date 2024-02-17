import React from "react";
import '../../index.css';
import './WorkExperience.css';
import orangedot from '../Images/orange-dot.png'
import darkdot from '../Images/dark-dot.png'


const WorkExperince = () => {

    return (
        <div className="work-experience">
            <h2><span className="span1">My</span> <span>Work Experince</span></h2>
            <div className="content">
                <div className="row">
                    <div className="left">
                        <h3>Cognizant, Mumbai</h3>
                        <p className="timeline">Sep 2016- July 2020</p>
                    </div>
                    <div className="right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
                    </div>
                    <div className="dot">
                        <img src={orangedot} alt="logo" />
                        <div className="line"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">
                        <h3>Sugee Pvt limited, Mumbai</h3>
                        <p className="timeline">Sep 2016- July 2020</p>
                    </div>
                    <div className="right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
                    </div>
                    <div className="dot">
                        <img src={darkdot} alt="logo" />
                        <div className="line"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">
                        <h3>Cinetstox, Mumbai</h3>
                        <p className="timeline">Sep 2016- July 2020</p>
                    </div>
                    <div className="right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
                    </div>
                    <div className="dot">
                        <img src={orangedot} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperince;