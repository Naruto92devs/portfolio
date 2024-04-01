import React from "react";
import hair1 from '../Images/hair1.png';
import hair2 from '../Images/hair2.png';
import quote from '../Images/quote-up.png';
import star from '../Images/Star.svg';
import elipse from '../Images/Ellipse.svg';
import celebration from '../Images/celebration.svg';
import mine from '../Images/mine2 1.png';
import arrow from '../Images/arrow up right.svg';
import '../../index.css';
import './Hero.css';

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank');
    newWindow.focus();
};


const Hero = () => {

    const hired = () => {
        const celebrate = document.getElementById('celebration');
        const name = document.getElementById('name');
        const experience = document.getElementById('experience');
        celebrate.classList.add("active");
        name.classList.add("active");
        experience.classList.add("active");
    }
    const notHire = () => {
        const celebrate = document.getElementById('celebration');
        const name = document.getElementById('name');
        const experience = document.getElementById('experience');
        celebrate.classList.remove("active");
        name.classList.remove("active");
        experience.classList.remove("active");
    }

    return (
        <section className="hero-section">
                <div className="intro">
                    <div className="name" id="name">
                        <li>Hello!</li>
                        <h1>We <span>DEVELOP</span>,<br/>YOUR IMAGINATIONS</h1>
                        <img className="hair1" src={hair1} alt="logo"/>
                        <img className="hair2" src={hair2} alt="logo"/>
                    </div>
                    <div className="experience" id="experience">
                        <div className="left">
                            <img className="quote" src={quote} alt="logo"/>
                            <p>100% responsive, Creative Animations and browser compatible to ensure our website’s success.Highly Recommended</p>
                        </div>
                        <div className="right">
                            <div className="star">
                                <img src={star} alt="logo"/>
                                <img src={star} alt="logo"/>
                                <img src={star} alt="logo"/>
                                <img src={star} alt="logo"/>
                                <img src={star} alt="logo"/>
                            </div>
                            <h2>02 Years</h2>
                            <p>Experience</p>
                        </div>
                    </div>
                </div>
                <div className="me">
                    <img className="circle" src={elipse} alt="logo"/>
                    <img className="mine" src={mine} loading="lazy" alt="logo"/>
                    <img className="celebration" id="celebration" src={celebration} alt="logo"/>
                    <div className="buttons">
                            <li onClick={() => openInNewTab('https://t.me/Naruto92devs')} className="btn" onMouseEnter={hired} onMouseLeave={notHire}>
                                Inbox me
                                <img className="arrow" src={arrow} alt="logo"/>
                            </li>
                            <li onClick={() => openInNewTab('https://t.me/naruto_webdevs')} className="btn">
                                TG Channel
                                <img className="arrow" src={arrow} alt="logo"/>
                            </li>
                    </div>
                </div>
            </section>
    );
}

export default Hero;