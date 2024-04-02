import React from "react";
import '../../index.css';
import './WorkExperience.css';
import orangedot from '../Images/orange-dot.png'
import darkdot from '../Images/dark-dot.png'


const WorkExperince = () => {

    return (
        <div className="work-experience">
            <h2><span className="span1">Our</span> <span>Work Expertise</span></h2>
            <div className="content">
                <div className="row">
                    <div className="left">
                        <h3>Animation Websites</h3>
                        <p className="timeline">Bringing Your Brand to Life</p>
                    </div>
                    <div className="right">
                        <p>Elevate your online presence with our expertise in animation websites. From eye-catching motion graphics to fluid transitions, we specialize in creating immersive digital experiences that captivate and engage visitors. Let us bring your brand to life with dynamic visuals and seamless user interactions, setting your website apart in the digital realm.</p>
                    </div>
                    <div className="dot">
                        <img src={orangedot} alt="logo" />
                        <div className="line"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">
                        <h3>Glassmophim Sites</h3>
                        <p className="timeline">Crafting Cinematic Digital Spaces</p>
                    </div>
                    <div className="right">
                        <p>Step into the realm of Glassmophim with our specialized website designs. Combining innovative layouts with stunning visuals, we create immersive online experiences that showcase your content in its best light. Whether you're a filmmaker, artist, or content creator, trust us to transform your vision into a captivating digital platform.</p>
                    </div>
                    <div className="dot">
                        <img src={darkdot} alt="logo" />
                        <div className="line"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">
                        <h3>CryptoCoin (Meme Coin) Websites</h3>
                        <p className="timeline">Navigating the Crypto Craze</p>
                    </div>
                    <div className="right">
                        <p>Dive into the world of cryptocurrency with our expertise in crafting captivating websites for meme coins. With a keen understanding of the crypto community's preferences, we deliver visually striking designs and seamless functionality tailored to your coin's unique identity. Trust us to elevate your online presence in the competitive crypto landscape.</p>
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